import jwt from "jsonwebtoken";

export const tokenGenerator = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};
