import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export class AuthController {
  constructor(private authService: AuthService) {}

  async token(req: Request, res: Response) {
    const response = await this.authService.getTokens(req.body);
    res.json(response);
  }

  async refreshToken(req: Request, res: Response) {
    const response = await this.authService.refreshAccessToken(
      req.body.refresh
    );
    res.json(response);
  }
}
