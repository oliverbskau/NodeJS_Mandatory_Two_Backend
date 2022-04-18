import db from "./database/createMySQLConnection.js";
import mailRouter from "./routers/mailRouter.js";
import passwordRouter from "./routers/passwordRouter.js"


import express, { Router } from "express";
import cors from "cors";
import helmet from "helmet";



const app = express();


app.use(cors());
app.use(express.json());
app.use(helmet());

app.use(mailRouter);
app.use(passwordRouter);


app.get("/logins", async (req, res) => {
  const users = await db.query(`SELECT * FROM logins`, (err, users) => {
    res.send({users});
  });
});
app.get("/clothes", async (req, res) => {
  const clothes = await db.query(`SELECT * FROM clothes`, (err, clothes) => {
    res.send({clothes});
  });
});
app.get("/accessories", async (req, res) => {
  const accessories = await db.query(`SELECT * FROM accessories`, (err, accessories) => {
    res.send({accessories});
  });
});
app.get("/shoes", async (req, res) => {
  const shoes = await db.query(`SELECT * FROM shoes`, (err, shoes) => {
    res.send({shoes});
  });
});
app.get("/electronics", async (req, res) => {
  const electronics = await db.query(`SELECT * FROM electronics`, (err, electronics) => {
    res.send({electronics});
  });
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running at port: ", PORT);
});





