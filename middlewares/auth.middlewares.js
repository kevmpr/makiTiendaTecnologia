// import jwt from 'jsonwebtoken'

// function authJwt(req, res, next){
//     const token = (req.signedCookies.token)

//     if (!token) return res
//     .status(403)
//     .send('Hace falta autorizacion')

//     jwt.verify(token, config.secretKey, (err, decoded) =>{
//         id (err)
//         return res
//                 .status(500)
//                 .send('El token ha expirado')

//         console.log(decoded)
//     next();
//     })
// }

// export const middlewares = {authJwt}