import jwt from 'jsonwebtoken'

const validateJWT = (req,res,next) => {
  const token = req.header('Authorization'). replace('Bearer ','');
  if (!token) {
     return res.status(401).json({
      message: 'NO token, authorization denied'
     })
  }

  try{

    // extract user info from token
    const user = jwt.verify(token, process.env.JWT_SECRET);
    // put user info in req object to easy access
    req.user = user;
    //calling next middleware in the chain
    next();

  }
  catch(err){
    console.log(err)
    return res.status(500).json({message: 'interval server error'})
  }
}

export default validateJWT