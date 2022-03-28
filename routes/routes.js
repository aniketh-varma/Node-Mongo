const express = require('express');
const Model = require("../models/model");

const router = express.Router();

//GET ALL Users
router.get('/get_users', async (req, res) => {
    try {
        const data = await Model.find().sort({ name : 1, age : 1 });
        res.json(data);
    }
    catch(error) {
        res.status(500).json({message: error.message});
    }
});

//POST API for adding a user
router.post('/post', async (req, res) => {
    const data = new Model({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave);
    }
    catch(error) {
        res.status(400).json({message: error.message});
    }
});

//PATCH API for updating a user's details
router.patch('/patch/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const dataToUpdate = req.body;
        const options = {new: true};

        const result = await Model.findByIdAndUpdate(
            id, dataToUpdate, options
        )

        res.send(result);
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

//DELETE API to delete a user
router.delete('/delete/:id', async (req, res) => {
    try {
        await Model.findByIdAndDelete(req.params.id);
        res.send(`${req.params.id} has been deleted.`)
    }
    catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;