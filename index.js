const express=require("express");
const {MongoClient}=require("mongodb");
const cors=require("cors");

const app=express();
app.use(express.json());
app.use(cors());


app.post("/save",(req,res)=>{

    const url="mongodb+srv://vrishabs2004:VPI2A3qAZswTPEp2@cluster0.qxujf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    console.log("Hi");
    const client=new MongoClient(url);
    const db=client.db("wn28dec24");
    const col=db.collection("student");
    const doc={"name":req.body.name, "choice":req.body.choice};
    col.insertOne(doc)
    .then(result=>res.send(result))
    .catch(err=>res.send(err));
});


app.listen(9999,()=>{console.log("Ready to serve @9999");});