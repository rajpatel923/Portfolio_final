const isAdmin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Unauthorized: not logged in" });
  }
  if (req.user.email !== process.env.ADMIN_EMAIL) {
    return res.status(403).json({ message: "Forbidden: not an admin" });
  }
  next();
};

export { isAdmin };
