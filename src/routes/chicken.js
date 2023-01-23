const express = require("express");
const Chicken = require("../models/chicken");
const router = new express.Router();

module.exports = router;

// post
router.post('/chickens', async (req, res, next) => {
    const chicken = new Chicken(req.body);

    try {
        const savedChicken = await chicken.save();
        res.status(201).send(savedChicken);
    } catch(error) {
        res.status(400).send(error);
    }
})

// get
router.get('/chickens', async (req, res, next) => {
    try {
        const chickens = await Chicken.find({});
        res.send(chickens);
    } catch(error) {
        res.status(500).send(error);
    }
})

// past
router.patch('/chickens/:id', async (req, res, next) => {
    try {
        const chicken = await Chicken.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });
        if (!chicken)
            res.status(404).send("chicken not found!");
        else
            res.send(chicken);
    } catch(error) {
        res.status(500).send(error);
    }
})

// delete
router.delete('/chickens/:id', async (req, res, next) => {
    try {
        const chicken = await Chicken.findByIdAndDelete(req.params.id);
        if (!chicken)
            res.status(404).send("chicken not found!");
        else
            res.send(chicken);
    } catch(error) {
        res.status(500).send(error);
    }
})