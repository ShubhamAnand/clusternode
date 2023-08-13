import express from 'express';
import cluster from "cluster";
import os from "os";

const numCpu =os.cpus().length;
//console.log(numCpu)

const app =express();

app.get('/',(req,res)=>{
    for(let i=0;i<1e8;i++){

    }
    res.send(`Ok...${process.pid}`);
    cluster.worker.kill();
})

if(cluster.isPrimary) //if master fork a new worker process{
 {   
    for(let i=0;i<numCpu;i++){
     
    cluster.fork();
  
}
cluster.on("exit",(worker,code,signal)=>{
    console.log(`worker exited, ${worker.process.pid}`);
    cluster.fork();
})
}
else{

    app.listen(3000,()=>{
        console.log("port",3000+"process",process.pid);
    })
}


