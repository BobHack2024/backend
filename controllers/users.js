// controllers/userController.js
const schemas = require('../mongodb/schemas/schemas');


const signUp = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await schemas.Users.findOne({ email: email });

        if (existingUser) {
            // If user already exists, send a 409 Conflict response
            return res.status(409).send({ message: 'User with this email already exists' });
        }

        // No existing user, create a new one
        const newUser = new schemas.Users({ email, password });
        await newUser.save();

        // Send a 201 Created response with the new user object
        res.status(201).send({ message: 'New user created successfully', user: newUser });
        
    } catch (err) {
        console.error('Error handling user data:', err);
        res.status(500).send({ message: 'Error creating user', error: err.message });
    }
};





const getAllUsers = async (req, res) => {
  try {
    const users = await schemas.Users.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
};

module.exports = {
  signUp,
  getAllUsers,

};
