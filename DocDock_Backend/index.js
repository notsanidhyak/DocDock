const express=require('express');
const app=express();
const port=3000;
const path=require('path');
const cors=require('cors');
app.use(express.json());

app.use(cors({
    origin:'*'
}));

app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
});


// app.get('/doctor',(req,res)=>{
//     res.json([{
//         "doctorId":0,
//         "speciality":'Cardiologist',
//         "name":"Drag",
//         "experience":"bhdcj",
//         "clinic:":"dnjdewdw",
//         "imageURL":'assets/profile_pic.png'
//     },
//     {
//         "doctorId":1,
//         "speciality":'Cardiologisttt',
//         "name":"Drag",
//         "experience":"bhdcj",
//         "clinic:":"dnjdewdw",
//         "imageURL":'assets/profile_pic.png'
//     },
//     {
//         "doctorId":2,
//         "speciality":'Cardiologist',
//         "name":"Drag",
//         "experience":"bhdcj",
//         "clinic:":"dnjdewdw",
//         "imageURL":'assets/profile_pic.png'
//     }])
// })

const authRouter=require('./routes/authRouter');
const userRouter=require('./routes/userRouter');

app.use('/',authRouter);
app.use('/appointment',userRouter);
