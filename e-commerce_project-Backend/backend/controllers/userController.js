// @desc    Get users
// @route   GET /api/users
// @access  Public
const getUsers = async (req, res) => {
  res.status(200).json({ message: 'Get all users route works!' });
};

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  
  if (!name || !email || !password) {
    res.status(400);
    throw new Error('Please include all fields');
  }

  res.status(201).json({ message: 'Register user route works!', user: { name, email } });
};

module.exports = {
  getUsers,
  registerUser,
};
