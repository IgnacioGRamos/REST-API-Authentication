import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

import  authRouter from './routes/auth.routes';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import specialRoute from './routes/special.routes';
//intializations
const app = express()

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev')); //usamos el modulo de desarrollo'dev' de morgan
app.use(cors())
app.use(express.urlencoded({extended: false})); // estos metodos de express son necesario para las request tipo post y put, reciben 
app.use(express.json());                        // los datos enviados desde el front 
app.use(passport.initialize());
passport.use(passportMiddleware);

//routes

app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});

app.use(authRouter);
app.use(specialRoute)

export default app;