const router = require('express').Router();

const mongoose = require('mongoose')

require('dotenv').config()

let {Schema} = mongoose;


router.get('/login',(req,res) => {
    res.render('form')
})

const mySchema = new Schema({
    firstname: String,
    lastname: String
})


const uri = `mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.l162asa.mongodb.net/myDatabase`;


// console.log(process.env.DB_password)

const connectParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}
async function main(){
await mongoose .connect(uri, { useNewUrlParser: true }).then(() => {
    console.log("MongoDB connected")})
} 
main().catch((err) => console.log(err));


const User = mongoose.model("User",mySchema)



router.post("/login",async(req,res) => {
 const Users = new User(req.body)

 const result = await Users.save() 
   console.log(result);

    res.redirect("/")
})

router.get("/",async (req,res)=>{
    res.render("view",{
        myUser: await User.find({})
    })
})

module.exports = router;