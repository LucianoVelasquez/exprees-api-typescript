import { Router } from "express";
import { readdirSync } from 'fs' 

const PATH_ROUTER = `${__dirname}`;
const router = Router();

const cleanFileName = (fileName:string)=>{ //Esta funcion sirve para sacarle el .ts al nombre de los archivos
    const file = fileName.split('.').shift(); 
    return file;
}

readdirSync(PATH_ROUTER).filter((filname)=>{ //Funcion que sirve para contar la cantidad de archivos que hay en la carpeta Router.
    const cleanName = cleanFileName(filname);
    if(cleanName !== 'index'){
        import(`./${cleanName}`).then((moduleRouter)=>{
            console.log(`Se esta cargando la ruta /${cleanName}`);
            router.use(`/${cleanName}`,moduleRouter.router)
        })
    };
})

export { router }