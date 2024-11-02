const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

const products = require("./data/Products");

const PORT = process.env.PORT

const mongoose = require("mongoose")

//connect db
mongoose.connect(process.env.MONGOOSEDB_URL).then(()=>console.log("db connected")).then((err)=>{
    err;
})

const databaseSeeder = require('./databaseSeeder');
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product")

app.use(express.json())
//database seeder routes
app.use('/api/seed',databaseSeeder)

//routes for users
app.use('/api/users',userRoute)

//routes for products
app.use('/api/products',productRoute)


app.listen(PORT || 3000 ,()=>{
    console.log(`server listen on port ${PORT}`)
})




//api product test route
// app.get("/api/products",(req,res)=>{
//     res.json(products);
// });

// app.get("/api/products/:id",(req,res)=>{
//     const product = products.find((product)=>product.id == req.params.id)
//     res.json(product)
// })

//mongodb+srv://admin:1234@cluster0.9f0jn.mongodb.net/react-node-app