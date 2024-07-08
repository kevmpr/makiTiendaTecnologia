export const config = {
    secretKey: 'maki',
    token: { expiresIn: 40},
    cookie: { 
        maxAge: 10000,
        httpOnly: true,
        signed: true
    }
}