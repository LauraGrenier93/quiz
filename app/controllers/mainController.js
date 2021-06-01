const { Quiz } = require('../models/');

const mainController = {
  /**
   * method to display quizzes on the home page
   * @param {req} req 
   * @param {res} res 
   */
  homePage: async (req, res) => {
    try {
      const quizzes = await Quiz.findAll({
        include: ['author']
      });
      res.render('index', { quizzes });
    } catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  }

};

module.exports = mainController;