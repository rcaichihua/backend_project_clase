import { TokenType } from '../helpers/token.helper';

export interface TokenPayload {
  type: TokenType;
  userId: number;
}