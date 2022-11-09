import { AppError } from '../../common/models/error';
import { HashService } from '../../common/services/hash.service';
import { TokenService } from '../../common/services/token.service';
import { UserRepository } from '../user/user.repository';
import { AuthCredentials } from './auth.type';

export class AuthService {
  constructor(
    private userRepository: UserRepository,
    private hashService: HashService,
    private tokenService: TokenService
  ) {}

  async getTokens(credentials: AuthCredentials) {
    const user = await this.userRepository.getByEmailWithPermissions(
      credentials.email
    );

    if (!user) {
      throw new AppError(404, 'Usuario no existe');
    }

    const isValidPassword = this.hashService.compare(
      credentials.password,
      user.password
    );

    if (!isValidPassword) {
      throw new AppError(403, 'Contraseña Incorrecta');
    }

    const permissions = new Set();

    user.userRol.forEach((userRol) =>
      userRol.rol.rolPermission.forEach((rolPermission) =>
        permissions.add(rolPermission.permission.name)
      )
    );

    user.userPermission.forEach((userPermission) =>
      permissions.add(userPermission.permission.name)
    );

    const access = this.tokenService.getAccessToken({
      userId: user.id,
      permissions: [...permissions],
    });
    const refresh = this.tokenService.getRefreshToken({ userId: user.id });

    return { access, refresh };
  }

  async refreshAccessToken(refreshToken: string) {
    const decodedToken = this.tokenService.verify(refreshToken);

    if (!decodedToken) {
      throw new AppError(403, 'Token invalido');
    }

    const isRefreshToken = this.tokenService.isRefreshToken(decodedToken);

    if (!isRefreshToken) {
      throw new AppError(403, 'Tipo de token invalido');
    }

    const user = await this.userRepository.getByIdWithPermissions(
      decodedToken.userId
    );

    if (!user) {
      throw new AppError(404, 'Usuario no existe');
    }

    const permissions = new Set();

    user.userRol.forEach((userRol) =>
      userRol.rol.rolPermission.forEach((rolPermission) =>
        permissions.add(rolPermission.permission.name)
      )
    );

    user.userPermission.forEach((userPermission) =>
      permissions.add(userPermission.permission.name)
    );

    const access = this.tokenService.getAccessToken({
      userId: decodedToken.userId,
      permissions: [...permissions],
    });

    return { access };
  }
}
