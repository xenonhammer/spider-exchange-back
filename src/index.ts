import auth from "@src/routes/auth/auth";
import express from "express";
import '../config';
import Redis from "ioredis";
import startRoute from './routes/start';
import coins from "@src/routes/coins";

const PORT = process.env.PORT;

// export const client = new Redis(process.env.REDDIS_PATH);

const app = express();

app.use(express.json())
app.use(express.urlencoded())

app.use(startRoute);
app.use(coins);
app.use(auth);

(async function (){
  try {
    app.listen(PORT, () => {
      console.log(`Server has been started in port ${process.env.PORT}`)
    })
  } catch (e) {
    console.error(e)
  }
})();

