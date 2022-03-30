import { Router } from "express";
const router = Router();

import passport from "passport";

router.get('/special', passport.authenticate('jwt', {session: false}), (req, res) => {    // la caracteristica 'jwt' va a usar por defecto la funcion que creamos en passport.ts
    res.send('Success');
}) 

export default router;