import express from 'express';
import morgan from 'morgan';
import cors from 'cors'

//intializations
const app = express()

//settings
app.set('port', process.env.PORT || 3000);


//middlewares
app.use(morgan('dev')); //usamos el modulo de desarrollo'dev' de morgan
app.use(cors())
app.use(express.urlencoded({extended: false})); // estos metodos de express son necesario para las request tipo post y put, reciben 
app.use(express.json());                        // los datos enviados desde el front 

//routes

app.get('/', (req, res) => {
    res.send(`The API is at http://localhost:${app.get('port')}`);
});

export default app;