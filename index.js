const express = require('express')
const cors=require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const port=process.env.PORT || 5000;
require ('dotenv').config();

// assignment-10
// 9izE2DeOm3L78qt7



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.e8jg2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});



async function run() {
  try {
    const databasecollection = client.db("BD_ITEM").collection("ITEM")


    app.post('/equepment',async(req,res)=>{
      const user = req.body;
      const result=await databasecollection.insertOne(user)
      res.send(result)

    })

    app.get('/equepment',async(req,res)=>{
      const cursor= databasecollection.find().limit(6);
      const result=await cursor.toArray();
      res.send(result)
    })

    app.get('/equepments',async(req,res)=>{
      const cursor= databasecollection.find();
      const result=await cursor.toArray();
      res.send(result)
    })
    app.get('/equepment/:id',async(req,res) => {
        const id=req.params.id;
        const query = {_id: new ObjectId(id)}
        const result =await databasecollection.findOne(query)
        res.send(result)
    })

    app.get('/myequepment', async (req, res) => {
      const { email } = req.query; 
          const query = { useremail: email };
          const cursor = databasecollection.find(query);  
          const result = await cursor.toArray();  
          res.send(result);  
      
  });

  app.delete('/equepment/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id: new ObjectId(id)}
    const result=await databasecollection.deleteOne(query)
    res.send(result)
  })


  app.get('/equepment/:id',async(req,res)=>{
    const id=req.params.id;
    const query={_id: new ObjectId(id)}
    const result=await databasecollection.findOne(query)
    res.send(result)
  })

  
  
  


    // Connect the client to the server	(optional starting in v4.7)
    // await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})