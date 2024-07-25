// controllers/userController.js
const schemas = require('../mongodb/schemas/schemas');



const postAnswers = async (req, res) => {
    // const { user_id, question} = req.body;

    try {
        // Check if the user already exists
        
         
            // No existing user, create a new one
            const newData = new schemas.Questions(req.body);
            await newData.save();
            res.status(200).send({ message: 'answers created successfully', data: newData });
        
    } catch (err) {
        console.error('Error handling user data:', err);
        res.status(500).send(err);
    }
};

const getAllAnswers = async (req, res) => {
  try {
    const allData = await schemas.Questions.find();
    res.status(200).send(allData);
  } catch (err) {
    res.status(500).send(err);
  }
};

const getAllAnswersbyID = async (req, res) => {
  try {
    const dataByID = await schemas.Questions.findOne({user_id:req.params.user_id});
    res.status(200).send(dataByID);
  } catch (err) {
    res.status(500).send(err);
  }
};




module.exports = {
  postAnswers,
  getAllAnswers,
  getAllAnswersbyID
 

};
