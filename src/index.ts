import { conection } from './config/db';

import  app  from "./app";


function main(){
    conection.sync().then(()=>{
        console.log("conectado a db")
    }).catch((error)=>{
        console.log("error en la conexion ", error)
    })
    
    app.listen(3000,()=>{
        console.log('servidor sequelize inicializado en el puerto '+3000)
    })
}

main();