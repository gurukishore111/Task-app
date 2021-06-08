const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const connectDb = require('./config/db');
const UserRouter = require('./routes/userRoutes');

dotenv.config();
connectDb();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('Hi Iam here......');
});

app.use('/user', UserRouter);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log(`Server listening at ${PORT}`));
