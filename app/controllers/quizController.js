const { localsName } = require('ejs');
const { Quiz, Tag, } = require('../models');

const quizzController = {

  quizzPage: async (req, res) => {
    try {
      const user= req.session.user;
      const quizId = parseInt(req.params.id);
      const quiz = await Quiz.findByPk(quizId,{
        include: [
          { association: 'author'},
          { association: 'questions', include: ['answers', 'level']},
          { association: 'tags'}
        ]
      });

      if(!!req.session.user){
        res.render('play_quiz', {quiz})
      }else{
        res.render('quiz', {quiz});
      }
    } catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  },

  listByTag: async (req, res) => {
    try {
      const tagId = parseInt(req.params.id);
      const tag = await Tag.findByPk(tagId,{
        include: [{
          association: 'quizzes',
          include: ['author']
        }]
      });
      const quizzes = tag.quizzes;
      res.render('index', { quizzes });
    } catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  },

  quizzAction: async (req, res) => {
    try {
      const  userAnswers = req.body;
      const quizUrl = parseInt(req.params.id);
      // console.log('user response retrieved from the URL',userAnswers);
      let score=0;
      let index=1;
      const quiz = await Quiz.findByPk(quizUrl,{
        include:  ['author','tags',
          { association: 'questions', include: ['answers', 'level','good_answer']}
        ]
      });
      for(const question of quiz.questions){
          // console.log('the key to userAnswerKey',userAnswersKey);
        // console.log('value of question.good_answer.id',question.good_answer.id);
        // console.log('value of req.body[`question_${question.id}`]',req.body[`question_${question.id}`]);
        if(parseInt( req.body[`question_${question.id}`],10) === question.good_answer.id){
          score++;        
        }
        index++;
      }
      console.log('the score is ',score);
      res.render('score_quiz', {score, quiz,userAnswers});
    } catch (err) {
      req.session.flash ="Nous avons eu un problème technique, Merci de réessayer."
      console.trace(err);
      res.status(500).send(err);
    }
  }
};

module.exports = quizzController;