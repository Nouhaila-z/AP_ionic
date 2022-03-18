const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();
const animal = require('../services/animaux'); //récupérer les functions

/* GET animaux */
router.get('/', async function(req, res, next) {
    try {
        res.json(await animal.getAnimaux(req.query.page));
    } catch (err) {
        console.error(`Error  `, err.message);
        next(err);
    }
});

router.get('/:id', async function(req, res,next){
    try {
        res.json(await animal.getAnimalId(req.params.id));
    } catch (err) {
        console.error(`Erreur`,err.message);
        next(err);
    }
});

router.get('/region/:id', async function(req, res,next){
    try {
        res.json(await animal.getAnimauxByRegion(req.params.id));
    } catch (err) {
        console.error(`Erreur`,err.message);
        next(err);
    }
});

router.get('/alimentation/:id', async function(req, res,next){
    try {
        res.json(await animal.getAnimauxByAlimentation(req.params.id));
    } catch (err) {
        console.error(`Erreur`,err.message);
        next(err);
    }
});

/* POST animal  */
router.post('/', async function(req, res, next) {
    try {
        res.json(await animal.create(req.body));
    } catch (err) {
        console.error(`Error while creating animal `, err.message);
        next(err);
    }
});

/* PUT animal  */
router.put('/:id', async function(req, res, next) {
    try {
        res.json(await animal.update(req.params.id, req.body));
    } catch (err) {
        console.error(`Error while updating animal `, err.message);
        next(err);
    }
});

/* DELETE animal  */
router.delete('/:id', async function(req, res, next) {
    try {
        res.json(await animal.remove(req.params.id));
    } catch (err) {
        console.error(`Error while deleting animal `, err.message);
        next(err);
    }
});

module.exports = router;