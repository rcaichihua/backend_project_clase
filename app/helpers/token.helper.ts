import jwt from 'jsonwebtoken';
import { TokenPayload } from '../interfaces/token-payload.interface';

const PRIVATE_KEY = 'asdasdasdas';
const ACCESS_EXPIRED_IN = '3m';
const REFRESH_EXPIRED_IN = '1d';

export enum TokenType {
  access = 'access',
  refresh = 'refresh'
}

const verifyToken = (token: string): TokenPayload => jwt.verify(token, PRIVATE_KEY) as TokenPayload;

const generateToken = (type: TokenType, payload: any, expiresIn: string) => {
  return jwt.sign({ type, ...payload }, PRIVATE_KEY, { expiresIn })
}

const generateAccessToken = (payload: any) => generateToken(TokenType.access, payload, ACCESS_EXPIRED_IN);
const generateRefreshToken = (payload: any) => generateToken(TokenType.refresh, payload, REFRESH_EXPIRED_IN);

export const TokenHelper = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken
}