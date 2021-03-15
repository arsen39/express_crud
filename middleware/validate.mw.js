const Yup = require("yup");

const VALID_SCHEMA = Yup.object({
  body: Yup.string()
  .matches(/^[\w ]{3,100}$/, "Task must content from 3 to 100 characters")
  .required(),
  isDone: Yup.boolean(),
  userId: Yup.string().required()
});

module.exports.validateBody = async (req, res, next) => {
  try {
    req.body = await VALID_SCHEMA.validate(req.body);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
}