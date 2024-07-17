import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export async function validateJwt(req, res, next) {
  const { authorization } = req.headers;

  const secretKey = process.env.SECRET_KEY;

  try {
    const decoded = jwt.verify(authorization.split(" ")[1], secretKey);
    
    next()
  } catch (error) {
    res.status(403).json({ message: "unauthorized"})
  }
}