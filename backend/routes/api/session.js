const express = require('express');

const { setTokenCookie, restoreUser } = require('../../utils/auth');
const { User } = require('../../db/models');

const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

router.delete(
    '/',
    (_req, res) => {
      res.clearCookie('token');
      return res.json({ message: 'success' });
    }
  );

  const validateLogin = [
    check('credential')
      .exists({ checkFalsy: true })
      // .notEmpty()
      .withMessage('Email or username is required'),
    check('password')
      .exists({ checkFalsy: true })
      .withMessage("Password is required"),
    handleValidationErrors
  ];


 //==========Get the Current User===========
 router.get(
  "/", 
  restoreUser, (req, res) => {
  const { user } = req;
  if (user) {
    return res.json({
      user: user.toSafeObject(),
    });
  } else return res.json(null);
});

module.exports = router;


  //=============log in a user=================
  router.post(
    '/',
    validateLogin,
    async (req, res, next) => {
      const { credential, password } = req.body;
  
      const user = await User.login({ credential, password });
      if (!user) {
        const errors = new Error('Invalid credentials');
        errors.status = 401;
        // err.title = 'Login failed';
        // err.errors = ['The provided credentials were invalid.'];
        return next(errors);
      }
  
      const token = setTokenCookie(res, user);
     if (user){
       return res.json({
      //    id: user.id,
      //    username: user.username,
      //    email: user.email,
      user
       }
       );
     }
    }
  );

module.exports = router;