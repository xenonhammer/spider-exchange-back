import { Router, Request, Response } from "express";

const coins = Router();

const list = [
  {'btc': '12123'},
  {'etc': '12123'},
];

coins.route('/coins/')
  .get((req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(list));
  })
  .put((req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(req.body));
  })
  .delete((req: Request, res: Response) => {
    res.status(200).json(JSON.stringify(req));
  })



export default coins;