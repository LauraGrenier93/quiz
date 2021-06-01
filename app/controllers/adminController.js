const { Tag, Quiz } = require("../models");

const adminController = {
  /**
   * method to display the administrator page
   */
  adminPage: async (req, res) => {
    try {
      const tags = await Tag.findAll();
      const quizzes = await Quiz.findAll();
      res.render('admin', {tags, quizzes});
    }catch (err) {
      req.session.flash ="Nous avons eu un problème technique. Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  },
/**
 * method to create a category in the administrator page in post
 * @param {req} req 
 * @param {res} res 
 */
  adminAddAction: async (req, res) => {
    try{
      await Tag.create( req.body );
      req.session.flash ="La Catégorie a bien été crée";
      res.redirect("/admin");
    }catch (err) {
      req.session.flash ="Nous avons eu un problème technique. Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  },
/**
 * method that modifies the name of a tag
 * @param {req} req 
 * @param {res} res 
 */
  adminUpDateAction: async (req, res) => {
    try{
      const tagToModifyUrl = req.body.name[0];
      const tagAlterUrl = req.body.name[1];
      const tag = await Tag.findByPk(tagToModifyUrl);
      tag.name = tagAlterUrl;
      await tag.save();
      req.session.flash ="La Catégories est bien modifiée";
      res.redirect("/admin");
    }catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  },

  /**
   * method that associates a tag with a questionnaire
   * @param {req} req 
   * @param {res} res 
   */
  adminJoinTagQuizAction: async (req, res) => {
    try{
      const tagUrl = req.body.name[0];
      const quizUrl = req.body.name[1];
      const tag = await Tag.findByPk(tagUrl);
      const quiz = await Quiz.findByPk(quizUrl);
      await tag.addQuiz(quiz); 
      req.session.flash ="La Catégories est bien associée au quiz";
      res.redirect("/admin");
    }catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  }

};

module.exports = adminController;