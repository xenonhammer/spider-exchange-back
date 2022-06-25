import express from "express";
import '../config';
import Redis from "ioredis";
import startRoute from './routes/start';
const PORT = process.env.PORT;

const client = new Redis("rediss://:5959021b8a9340ab87c3b6843f659198@global-suitable-hermit-30598.upstash.io:30598");

const app = express();

app.use(startRoute)

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started in port ${process.env.PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
}

start()