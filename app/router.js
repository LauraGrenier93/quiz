const express = require('express');

const mainController = require('./controllers/mainController');
const quizController = require('./controllers/quizController');
const tagController = require('./controllers/tagController');
const userController = require('./controllers/userController');
const adminController = require('./controllers/adminController');

const adminMiddleware = require('./middlewares/admin');

const router = express.Router();

router.get('/', mainController.homePage);

// page "quizz"
router.get('/quiz/:id(\\d+)', quizController.quizzPage);
router.post('/quiz/:id(\\d+)', quizController.quizzAction);

// page "tags" ("sujets")
router.get('/tags', tagController.tagList);

// page quizzes by tag
router.get('/quizzes/tag/:id(\\d+)', quizController.listByTag);

// page user signup/login
router.get('/signup', userController.signupPage);
router.get('/login', userController.loginPage);

router.post('/signup', userController.signupAction);
router.post('/login', userController.loginAction);
// logout page
router.get('/disconnect', userController.disconnect);
// profile road
router.get('/profile', userController.profilePage);

// reserved routes as an admin
router.get('/admin', adminMiddleware, adminController.adminPage);
router.post('/admin', adminController.adminAddAction);

router.post('/admin/upDate', adminController.adminUpDateAction);
router.post('/admin/joinTagQuiz', adminController.adminJoinTagQuizAction);

module.exports = router;