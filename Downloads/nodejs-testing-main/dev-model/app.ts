import express from 'express';
import env from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import multer  from 'multer';
import initDb from './db';

env.load;
const app = express();
console.log("clicked");

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use('/images',express.static(path.join(__dirname,'src','images')))
const fileStorage = multer.diskStorage({
    destination: (req:any,res:any,cb:any) => {
        cb(null,'src/images');
    },
    filename: (req:any,file:any,cb:any)=> {
        cb(null,file.originalname+ new Date().toISOString())
    }
})
const filter = (req:any,file:any,cb:any)=> {
    if(file.mimetype == "image/png" || file.mimetype == "image/jpeg" || file.mimetype == "image/png") {
        cb(null,true);
    } else {
        cb(null,false);
    }
}
app.use(multer({
    storage: fileStorage,
    fileFilter:filter
}).single('image'));

app.use((error:any,req:any,res:any,next:any)=>{
    const status = error.statusCode || 500;
    const meesage = error.message;
    res.status(status).json({
        message: meesage
    })
})

app.use((error:any,req:any,res:any,next:any)=>{
    const status = error.statusCode || 500;
    const meesage = error.message;
    res.status(status).json({
        message: meesage
    })
})
app.get("/",(req,res)=>{
    res.send("Api is connected")
})

app.listen(process.env.PORT,() => {
    // initDb((callback:any) => {
    //     console.log(callback);
    // })
    console.log("Server is connected!!");
});
