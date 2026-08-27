import jwt from "jsonwebtoken";

export const authUser = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "Token not found" });
    }

    const tokenDecoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("tokendecodedddddd", tokenDecoded);
    console.log("tokendecodedidddddd", tokenDecoded.id);

    req.userId = tokenDecoded.id;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired Token",
    });
  }
};
