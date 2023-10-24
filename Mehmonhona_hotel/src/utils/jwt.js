const jwt =require("jsonwebtoken");

const secret = "1635asd!@";

const sign =(payload)=>jwt.sign(payload,secret,{expiresIn:"24h"});
const verify =(payload,callback)=>jwt.verify(payload,secret,callback);

module.exports ={
    sign,
    verify,
    secret,
}