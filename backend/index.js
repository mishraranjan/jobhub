import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
const PORT = 3000;
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));

// api
app.get('/home',(req,res)=>{
    res.send('Hey There from Backend')
})

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`);
})