import bcrypt from 'bcryptjs';

export class HashService {
  toHash(value: string) {
    return bcrypt.hashSync(value, 8);
  }

  compare(value: string, hash: string) {
    return bcrypt.compareSync(value, hash);
  }
}
