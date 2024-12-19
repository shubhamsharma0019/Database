const mongoose  = require('mongoose')
const express = require ('express')
const app = express();
app.use(express.json());

// connection URL
mongoose.connect("mongodb+srv://shubhamsharma639615:admin011@cluster011.92tdj.mongodb.net/Cluster011?retryWrites=true&w=majority")


// Define Schema of Database look like.
const User = mongoose.model('Users',{name:String , email:String , password:String});


app.post('/signup', async function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    const name= req.body.name;


    const existingUser = await User.findOne({email:username});
    if(existingUser){
        return req.status(400).send("Username is alraedy exist")
    }

    const user = new User({
        name:"shubham sharma",
        email:"shubham@gmail.com",
        password:"12345"
    });
    user.save();
    res.json({
        msg:"user created successfully"
    })
})
app.listen(3000)


