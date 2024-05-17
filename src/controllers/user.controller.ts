import {Request, Response} from 'express';
import {getUsers, saveUser} from "../services/user.service";

export const createUser = (req: Request, res: Response) => {
  const body = req.body;
  const response = saveUser(body)

  return res.send(response).status(200);
}

export const getUserList = (req: Request, res: Response) => {
  const response = getUsers()

  return res.send(response).status(200);
}
