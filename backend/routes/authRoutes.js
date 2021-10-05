const express = require('express');
const router = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        let user = await db.collection("users").findOne({
            email: req.body.email,
        });
        if (user) {
            return res.status(400).json({
                msg: "User Already Exists",
            });
        }
        const salt = await bcrypt.genSalt(10);
        req.body.password = await bcrypt.hash(req.body.password, salt);
        user = await db.collection("users").insertOne({
            password: req.body.password,
            email: req.body.email,
            username: req.body.username,
        });
        return res.status(200).json({
            message: "register succesfull",
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).json({
            message: "register unsuccesfull",
        });
    }
});

router.post("/login/", async (req, res) => {
    try {
        let user = await db.collection("users").findOne({
            email: req.body.email,
        });
        if (!user)
            return res.status(400).json({
                message: "User doesn't exist",
            });
        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch)
            return res.status(400).json({
                message: "Incorrect Password !",
            });
        const payload = {
            user: {
                id: user.id,
            },
        };
        const token = jwt.sign(payload, "randomString", {
            expiresIn: 3600,
        });
        res.status(200).cookie("acces_token", token);
        res.json(token);
    } catch (e) {
        console.error(e);
        res.status(500).json({
            message: "login unsuccesfull",
        });
    }
});

module.exports = router;