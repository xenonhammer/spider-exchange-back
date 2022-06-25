import express from "express";
import '../config';
import startRoute from './routes/start';
const PORT = process.env.PORT

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