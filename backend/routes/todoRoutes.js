const express = require("express");
const router = express.Router();
const mongodb = require("mongodb");
const authenticate = require("../middlewares/auth");

router.get("/todo", authenticate, async (req, res) => {
  try {
    let items = await db.collection("items").find().toArray();
    return res.status(200).json({ todoTasks: items });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: " unsuccesfull",
    });
  }
});

router.post("/items/", authenticate, async (req, res) => {
  try {
    await db.collection("items").insertOne({
      name: req.body.todo,
    });
    return res.status(200).json({
      message: "register succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unsuccesfull",
    });
  }
});

router.get("/remove/:id", authenticate, async (req, res) => {
  try {
    let delete_id = req.params.id;
    let items = await db
      .collection("items")
      .deleteOne({ _id: new mongodb.ObjectID(delete_id.toString()) });
    return res.status(200).json({
      message: "succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unsuccesfull",
    });
  }
});

router.get("/edit/:id", authenticate, async (req, res) => {
  try {
    let update_id = req.params.id;
    let items = await db
      .collection("items")
      .find({ _id: new mongodb.ObjectID(update_id.toString()) });
    return res.status(200).json({
      message: "succesfull",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unsuccesfull",
    });
  }
});

router.post("/edit/:id", authenticate, async (req, res) => {
  try {
    let update_id = req.params.id;
    await db.collection("items").findOneAndUpdate(
      { _id: new mongodb.ObjectID(update_id.toString()) },
      {
        $set: {
          name: req.body.update,
        },
      },
      {
        upsert: true,
      }
    );
    return res.redirect("/todo");
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "unsuccesfull",
    });
  }
});

module.exports = router;
