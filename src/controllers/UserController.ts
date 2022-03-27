import { Request, Response } from 'express'

class UserController {
  async index(req:Request, res:Response): Promise<Response> {
    return res.json('FUNCIONANDO')
  }
}

export default UserController