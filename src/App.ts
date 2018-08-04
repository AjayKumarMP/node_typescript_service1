import * as express from 'express';

class App{
    public express;


    constructor(){
        this.express = express()
        this.mountRoutes();
    }

    public mountRoutes(){
        const router = express.Router();

        router.get("/hello",(req,res)=>{
            res.send("hello world");
        })
        this.express.use('/',router)
    }
}

export default new App().express