/* eslint-disable @typescript-eslint/no-explicit-any */
import jwt from 'jsonwebtoken';

const PRIVATE_KEY = 'EGI1yFFZbFc4hD0s2FYTROE39JxOFNmI';
const ACCESS_EXPIRED_IN = '3m';
const REFRESH_EXPIRED_IN = '1d';

export interface TokenPayload {
  type: TokenType;
  userId: number;
  [key: string]: any;
}

export enum TokenType {
  access = 'access',
  refresh = 'refresh',
}

export class TokenService {
  private generate(type: TokenType, payload: any, expiresIn: string) {
    return jwt.sign({ type, ...payload }, PRIVATE_KEY, { expiresIn });
  }

  getAccessToken(payload: any) {
    return this.generate(TokenType.access, payload, ACCESS_EXPIRED_IN);
  }

  getRefreshToken(payload: any) {
    return this.generate(TokenType.refresh, payload, REFRESH_EXPIRED_IN);
  }

  verify(token: string): TokenPayload {
    return jwt.verify(token, PRIVATE_KEY) as TokenPayload;
  }

  isRefreshToken(payload: TokenPayload) {
    return payload.type === TokenType.refresh;
  }

  isAccessToken(payload: TokenPayload) {
    return payload.type === TokenType.access;
  }
}
