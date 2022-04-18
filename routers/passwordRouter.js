import {Router} from "express";
import db from "../database/createMySQLConnection.js";

import { encryptPassword, compareEncryptedPassword } from "../encryption/bcrypt.js"

const router = Router();

    
router.post("/login", async (req, res) => {
    
    db.query(`SELECT * FROM logins where username = ?`,[req.body.username], async (err, users) => {
        let foundUser = users[0];
        if (foundUser !== undefined && await compareEncryptedPassword(req.body.plainTextPassword, foundUser.password)){
            res.send({user: foundUser})
            console.log("logged in");
        }else{
            res.send({user: null})
            console.log("not logged in");
        }

     });

});

router.post("/signup", async (req, res) => {
    req.body.plainTextPassword = await encryptPassword(req.body.plainTextPassword);


    db.query(`SELECT * FROM logins where username = ?`, [req.body.username], (err, users) => {
        let foundUser = users[0]; 
       if(foundUser == undefined){
           db.query(`INSERT INTO logins(username, password) VALUES (?, ?);`, [req.body.username, req.body.plainTextPassword], (err, users) => {
            res.send({user: "Assigned new user"});
            });
            
       }else{
           res.send({message: "User already exists"})
       }
    });
});


    export default router;