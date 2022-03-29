const UserController = require('../controllers/UserController');
const { app } = require('../../server');

module.exports = (app) => {
    app.get('/api/users', UserController.getAll);
}