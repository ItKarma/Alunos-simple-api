/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
import jwt from 'jsonwebtoken';
/**
 * @param { import('express').Request } req
 * @param { import('express').Response } res
 *
 * @return { void }
 */
const longRequired = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({
      errors: ['Login required!'],
    });
  }

  const [, token] = authorization.split(' ');

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const { id, email } = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(401).json({
      errors: ['Token expirado ou Inválido'],
    });
  }
};

export default longRequired;
