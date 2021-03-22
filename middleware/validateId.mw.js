const Yup = require("yup");

const VALID_SCHEMA = Yup.object({
  userId: Yup.string().required()
});

module.exports.validateId = async (req, res, next) => {
  const {params} = req;
  try {
    req.body = await VALID_SCHEMA.validate(params);
    next();
  } catch (error) {
    res.status(400).send(error.message);
  }
}