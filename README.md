PROYECTO DE PRUEBA PARA PRACTICAR TYPESCRIPT, NODE JS, MONGODB, EXPRESS, JSONWEBTOKEN Y PASSPORT


PASOS: 

--npm init ---> para iniciar el proyecto y para la creacion del packge.json

-- instalamos todas las dependecias(npm i ''): 
   1)express
   2)mongoose
   3)morgan ---> este nos permite ver en consola las peticiones al servidor
   4) jwt(json web token)
   5)passport
   6)passport-jwt(es uno de los distintos metodos de autentificacion de passport)
   7)bcrypt
   8) cors -->es una modulo que nos ayuda a conectar dos servidores.


--dependencia de desarrollador( npm i -D ..):
  1)typescript
  2)tsc-watch
  3)todos los @types



-- npx tsc --init(crea el archivo de configuracion de typescript)
   cambiamos 'outdir': './build'
             'rootdir': './src'