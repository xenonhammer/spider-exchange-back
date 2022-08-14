import User from "@src/models/users/User";
import {Request, Response, Router} from "express";
import jwt from "jsonwebtoken";

const auth = Router();

auth.post('/singin', async (req: Request, res: Response) => {
  
  if (!req?.body?.login || !req.body?.password) return res.sendStatus(400);
  const {login, password} = req.body;
  if(User.findByCredentials(login, password)) return res.sendStatus(409);
  
  const user = new User(login, password);
  
  res.status(200).send(user)
});

auth.post('/login', async (req: Request, res: Response) => {
  if (!req?.body?.login || !req.body?.password) return res.sendStatus(400);
  const {login, password} = req.body;
  
  const user = User.findByCredentials(login, password);
  if (!user) return res.sendStatus(401);
  if (!user.token) user.token = jwt.sign({_id: user.id}, process.env.JWT_KEY, {expiresIn: '1h' });
  
  return res
    .status(200)
    .send(user)
});

auth.post('/logout', async (req: Request, res: Response) => {
  
  // if (!req?.headers. || !req.body?.password) return res.sendStatus(400);
  // const {login, password} = req.body;
  //
  // const user = User.findByCredentials(login, password);
  // if (!user) return res.sendStatus(401);
  // user.token = '';
  res.status(200).send(req.headers)
});
export default auth;