// controllers/userController.js
const schemas = require('../mongodb/schemas/schemas');


const createUser = async (req, res) => {
    const { username, longitude, latitude, fcm_token } = req.body;

    try {
        // Check if the user already exists
        const existingUser = await schemas.Users.findOne({ email: email });

        if (existingUser) {
            // User exists, update longitude, latitude, and FCM token
            existingUser.longitude = longitude;
            existingUser.latitude = latitude;
            existingUser.fcm_token = fcm_token;
            await existingUser.save(); // Save the updated user information
            res.status(200).send({ message: 'User updated successfully', user: existingUser });
        } else {
            // No existing user, create a new one
            const newUser = new schemas.Users(req.body);
            await newUser.save();
            res.status(201).send({ message: 'New user created successfully', user: newUser });
        }
    } catch (err) {
        console.error('Error handling user data:', err);
        res.status(500).send(err);
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
  createUser,
  getAllUsers,

};
