const { Router } = require('express');

const router = Router();
const objToString = obj => Object.keys(obj).map(k => `${k}: ${obj[k]}`).join('\n');

router.get('/', (req, res) => res.send(objToString(req.query)));

router.post('/', (req, res) => res.send(objToString(req.body)));

router.put('/', (req, res) => res.send(objToString(req.body)));

router.delete('/', (req, res) => res.send(objToString(req.body)));

module.exports = router;