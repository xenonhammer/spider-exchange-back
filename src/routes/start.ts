import { Router, Request, Response} from "express";

const route = Router();

route.get('/',(_req: Request, res: Response) => {
  res.send('hello world');
})


export default route;