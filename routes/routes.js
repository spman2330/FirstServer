const express = require('express');
const router = express.Router();

let data = [
    { id: 1, name: "Ha Duc Luon", age : 18 , email: "tuanluon@gmai.com", class: "CTTN-ToanTink64"},
    { id: 2, name: "Le Minh Thu", age : 8 , email: "thucute@gmai.com", class: "Ma soi"},
];

router.get('/', function (req, res) {
    res.status(200).json(data);
});

router.get('/:id', function (req, res) {
    let found = data.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        res.status(200).json(found);
    } else {
        res.sendStatus(404);
    }
});

router.post('/create', function (req, res) {
    let newId = data.length + 1;
    let newData ={
        id: newId,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        class: req.body.class
    }
    data.push(newData);
    res.status(200).json(newData);
});

router.put('/:id/edit', function (req, res) {
    let found = data.findIndex(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found === -1){
        res.sendStatus(404);
    } else {
        let newData ={
            id: req.params.id,
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            class: req.body.class
        }
        data.splice(found,1,newData);
        res.status(200).json(newData);
    }
});

router.delete('/:id/delete', function (req, res) {
    let found = data.findIndex(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found === -1){
        res.sendStatus(404);
    } else {
        data.splice(found,1);
        res.send('Delete successful');
    }
});
module.exports = router;