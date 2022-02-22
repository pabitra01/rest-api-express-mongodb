const express =require('express');
require('./db/connection')
const Student=require("./models/students")
const router=require('./routers/router')
const app=express();
const port=process.env.PORT || 5000;


app.use(express.json())
app.use(router)
app.listen(port,()=>{
    console.log("server is listening on port 5000");
})

























// const port=process.env.PORT || 5000;
// app.get('/',(req,res)=>{
//     res.send("homepage")
// })










// app.post('/students',async (req,res)=>{
//     console.log(req.body);
//     const user=new Student(req.body);

//     user.save().then(()=>{
//          res.status(201).send(user)
//     }).catch((e)=>{
//         res.status(400).send(e)
//     })
//     // res.send("hello from the backend");
// })
// app.get('/students',async (req,res)=>{
//     try {
//         const data=await Student.find();
//         res.send(data)
//     } catch (error) {
//         res.send(error)
//     }
// })


// app.get('/students/:id',async (req,res)=>{
//     try {
//         const {id}=req.params;
//         const singledata=await Student.findById({_id:id});
//         console.log(singledata);
//         res.status(200).send(singledata);
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

// app.get('/students/byname/:name',async (req,res)=>{
//     try {
//         const {name}=req.params;
//         const studentByName=await Student.findOne({name})
//         res.status(200).send(studentByName)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })


// app.patch('/students/:id',async (req,res)=>{
//     try {
//         const {id}=req.params;
//         const updateStudent=await Student.findByIdAndUpdate(id,req.body,{
//             new:true
//         })
//         res.send(updateStudent)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })


// app.delete('/students/:id',async (req,res)=>{
//     try {
//         const {id}=req.params;
//         const deleteStudent=await Student.findByIdAndDelete(id);
//         if(!deleteStudent){
//            return res.status(400).send("invalid id")
//         }
//         res.send(deleteStudent)
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })
// app.listen(port,()=>{
//     console.log("server is listening on port 5000");
// })




//create router
// const router=new express.Router();

// //define router
// router.get("/pabi",(req,res)=>{
//     res.send("hello")
// })
// app.use(router)

// //we need to register our router
