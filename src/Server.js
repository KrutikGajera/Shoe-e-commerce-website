const expr = require('express')
const mg = require('mongoose')
const bp = require('body-parser')
const cors = require('cors')
const val = require('validator')
const bodyParser = require('body-parser')

const app = expr()

app.use(cors())
app.use(bodyParser.json())

mg.connect("mongodb://127.0.0.1:27017/FSDPROJECT").then(()=>{console.log('success')}).catch((err)=>{console.log(err)})

const mySchema =new mg.Schema(
    {
        username:{
            type:String,
            required:true,
            trim:true,
            minlength:[3,"min length is 3"],
            maxlength:[7,"max length is 7"],
        },
        password:{
            type:String,
        }
    }
)
mg.pluralize(null)
const p1 = new mg.model('Username',mySchema)

app.post('/signup',async(req,res)=>
{
    try
    {
        const {username,password} = req.body;
        const newuser = new p1({
            username:username,
            password:password
        })
        await newuser.save();
        res.send();
    }
    catch(err)
    {
        res.send(err)
    }

})
app.listen(5000)