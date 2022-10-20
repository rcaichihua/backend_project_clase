import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/token-payload.interface';

const PRIVATE_KEY = 'asdasdasdas';
const ACCESS_EXPIRED_IN = '3m';
const REFRESH_EXPIRED_IN = '1d';

export enum TokenType {
  access = 'access',
  refresh = 'refresh',
}

const verifyToken = (token: string): TokenPayload =>
  jwt.verify(token, PRIVATE_KEY) as TokenPayload;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateToken = (type: TokenType, payload: any, expiresIn: string) => {
  return jwt.sign({ type, ...payload }, PRIVATE_KEY, { expiresIn });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateAccessToken = (payload: any) =>
  generateToken(TokenType.access, payload, ACCESS_EXPIRED_IN);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const generateRefreshToken = (payload: any) =>
  generateToken(TokenType.refresh, payload, REFRESH_EXPIRED_IN);

export const TokenHelper = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
