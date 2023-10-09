const axios = require('axios');





const horseController = {};

horseController.getHorses = async (req, res, next) => {
try{
  const response = await axios.get('api.theracingapi.com/v1/horses/search', {
    headers: {
      "Content-Type": 'application/json',
      'USERNAME': 'O4RqXm00hv2gGGXimYCZ7Bqe',
      'PASSWORD': 'QLmFXIgQdN6P2YoAImJIuuRi'
    },
    withCredentials: true
  })
  console.log('response:', response)
  res.locals.horse = 'horse';
  console.log(res.locals.horse);
  return next();
}catch(err){
  return next({
    log: `There was an error in horseController.getHorses. Error: ${err}`,
    status: 400,
    message: `Could not get that horse`
  })
}
}






module.exports = horseController;