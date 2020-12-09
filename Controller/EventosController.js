const express = require('express');
const router = express.Router();
const Eventos = require('../model/eventos');

router.get('/', (req, res) =>{
    Eventos.find({}, (err, data) => {
        if (err) return res.send({error: "Erro na consulta de eventos"});
        return res.send(data);
    });
});

router.post('/create', (req, res)=>{
    const {title} = req.body;
    if(!title) return res.send({ error: 'Digite o nome do evento'});

    Eventos.findOne({title}, (err) => {
        if (err) return res.send({error: 'Erro para achar o evento'});

        Eventos.create(req.body, (err, data) => {
            if (err) return res.send ({error: 'Erro ao criar o evento'});
            return res.send(data);
        });
    });

});

module.exports = router;