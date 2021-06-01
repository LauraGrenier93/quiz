/**
 * function that checks the user role as administrator
 * @param {req} req 
 * @param {res} res 
 * @param {next} next 
 * @returns 
 */
const adminMiddleware = (req, res, next) => {
  if(!req.session.user){
    return res.redirect('/login');
  }
  if(req.session.user.role === 'admin') {
    next();
  } else {
    return res.status(401).render('401');
  }
};

module.exports = adminMiddleware;