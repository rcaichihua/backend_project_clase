import { Request, Response } from 'express';
import { RolService } from './rol.service';

export class RolController {
  constructor(private rolService: RolService) {}

  async getAll(req: Request, res: Response) {
    const records = await this.rolService.getAll();
    res.json(records);
  }

  async getOne(req: Request, res: Response) {
    const record = await this.rolService.getOne(+req.params.id);
    res.json(record);
  }

  async create(req: Request, res: Response) {
    const { permissions, ...rol } = req.body;
    const record = await this.rolService.create(rol, permissions);
    res.json(record);
  }

  async update(req: Request, res: Response) {
    const { permissions, ...rol } = req.body;
    const record = await this.rolService.update(
      +req.params.id,
      rol,
      permissions
    );
    res.json(record);
  }

  async delete(req: Request, res: Response) {
    const record = await this.rolService.delete(+req.params.id);
    res.json(record);
  }
}
