import  app  from './App';

const port =  3001

app.listen(port, (err)=>{
    if(err){
        return console.log("server is faces some error")
    }   
    return console.log("server is running in "+port)
});