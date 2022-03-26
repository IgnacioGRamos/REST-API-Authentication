import mongoose, { ConnectOptions } from 'mongoose';

import config from './config'


mongoose.connect(config.DB.URI);


const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MOngoDb connection stablished');
});

connection.on('error', err => {
    console.log(err);
    process.exit(0);
});
