import app from './app'
import './db'

app.listen(app.get('port')); //le decimos que escuche en el puerto antes definido en app.set
console.log('Server on port,', app.get('port'));