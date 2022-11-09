import { Request, Response } from 'express';
import { UserService } from './user.service';

export class UserController {
  constructor(private userService: UserService) {}

  async getAll(req: Request, res: Response) {
    const records = await this.userService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.userService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const { permissions, rols, ...user } = req.body;
    const record = await this.userService.create(user, permissions, rols);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const { permissions, rols, ...user } = req.body;
    const record = await this.userService.update(
      +req.params.id,
      user,
      permissions,
      rols
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.userService.delete(+req.params.id);
    res.json(record);
  }
}
