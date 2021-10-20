import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';

const PORT = 3000;
const DB_URL = `mongodb+srv://user:user@cluster0.r7jh6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

const app = express();

app.use(express.json());
app.use('/api', router);

async function startApp() {
  try {
    await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
    app.listen(PORT, () => { console.log("server working on port " + PORT); })

  } catch (e) {
    console.log(e)
  }
}

startApp();