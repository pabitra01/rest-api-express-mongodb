const express=require('express')
const router=new express.Router();
const Student=require('../models/students')



router.get('/',(req,res)=>{
    res.send("homepage")
})



router.post('/students',async (req,res)=>{
    console.log(req.body);
    const user=new Student(req.body);

    user.save().then(()=>{
         res.status(201).send(user)
    }).catch((e)=>{
        res.status(400).send(e)
    })
 
})
router.get('/students',async (req,res)=>{
    try {
        const data=await Student.find();
        res.send(data)
    } catch (error) {
        res.send(error)
    }
})


router.get('/students/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const singledata=await Student.findById({_id:id});
        console.log(singledata);
        res.status(200).send(singledata);
    } catch (error) {
        res.status(500).send(error)
    }
})

router.get('/students/byname/:name',async (req,res)=>{
    try {
        const {name}=req.params;
        const studentByName=await Student.findOne({name})
        res.status(200).send(studentByName)
    } catch (error) {
        res.status(500).send(error)
    }
})


router.patch('/students/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const updateStudent=await Student.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.send(updateStudent)
    } catch (error) {
        res.status(400).send(error)
    }
})


router.delete('/students/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const deleteStudent=await Student.findByIdAndDelete(id);
        if(!deleteStudent){
           return res.status(400).send("invalid id")
        }
        res.send(deleteStudent)
    } catch (error) {
        res.status(500).send(error)
    }
})
module.exports=router