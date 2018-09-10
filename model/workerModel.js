const data = require('../data.json');
const fs = require('fs');

function dataCreate(data) {
    fs.writeFile('data.json', JSON.stringify(data), 'utf8', function (err, data) {
        if (err) { return err };
    });
};

function _getAll(req, res) {
    res.status(200).send(data);
}

function _create(req, res) {
    data.users.unshift(req.body);
    dataCreate(data);
    res.send({ mess: data.users.length, status: 200 });
};

function _update(req, res) {
    const index = data.users.findIndex(user => user.UID === Number(req.params.id));
    data.users.splice(index, 1, req.body);
    dataCreate(data);
    res.send({ mess: "update successfully", status: 200 });
};

function _delete(req, res) {
    const index = data.users.findIndex(user => user.UID === Number(req.params.id));
    data.users.splice(index, 1);
    dataCreate(data);
    res.status(204).send({ mess: "success", status: 204 });
};

module.exports = {
    getAll: _getAll,
    create: _create,
    update: _update,
    delete: _delete
};