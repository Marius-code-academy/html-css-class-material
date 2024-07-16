import Joi from "joi";

const userSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ["com", "net", "lt"] } })
    .optional(),
  dob: Joi.date().less("now"),
  monthlyIncome: Joi.number().integer().positive().required(),
});

export function validateUser(req, res, next) {
  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(400).json({ error: error.message });
  }

  next();
}
