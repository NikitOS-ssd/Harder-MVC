const express = require('express');
const adminController = require('../controllers/adminController.js');
const adminRouter = express.Router();

adminRouter.post('/post-admin', adminController.postAdmin);
adminRouter.get('/panel', adminController.showAdminpanel);
adminRouter.get('/', adminController.adminIdentity);

module.exports = adminRouter;
