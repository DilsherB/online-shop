const getUserData = (res, status, user) => {
  res.status(status).json({
    _id: user._id,
    name: user.name,
    email: user.email,
    isAdmin: user.isAdmin,
  });
};

const UserDataError = (res, status, msg) => {
  res.status(status);
  throw new Error(msg);
};

export { getUserData, UserDataError };
