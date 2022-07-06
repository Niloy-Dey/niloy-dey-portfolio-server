const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());


//Niloy-Dey-Portfolio 
// m5TJuWqLvmabFcmH



const uri = "mongodb+srv://Niloy-Dey-Portfolio:m5TJuWqLvmabFcmH@cluster0.qmztp.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run() {
    try {
        await client.connect();
        const projectsCollection =  client.db("Niloy-Dey-Portfolio").collection("projects");
        const skillsCollection =  client.db("Niloy-Dey-Portfolio").collection("skills");
        const htmlCollection =  client.db("Niloy-Dey-Portfolio").collection("html");
        const cssCollection =  client.db("Niloy-Dey-Portfolio").collection("css");





      


        //GETTING projects DATA
        app.get('/projects', async (req, res) => {
            const cursor = projectsCollection.find({});
            const projects = await cursor.toArray();
            res.send(projects);
        })


        //GETTING skills DATA
        app.get('/skills', async (req, res) => {
            const cursor = skillsCollection.find({});
            const skills = await cursor.toArray();
            res.send(skills);
        })

        //Getting html data 
        app.get('/html', async(req, res) =>{
            const query = {};
            const cursor = htmlCollection.find(query);
            const html = await cursor.toArray();
            res.send(html);
        })
        //Getting css data 
        app.get('/css', async(req, res) =>{
            const query = {};
            const cursor = cssCollection.find(query);
            const css = await cursor.toArray();
            res.send(css);
        })
        // GETTING SINGLE bike DATA
        // app.get('/projects/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const projects = await projectsCollection.findOne(query);
        //     res.send(projects);
        // })
        // POST BIKE DATA
        // app.post('/projects', async (req, res) => {
        //     const bike = req.body;
        //     const result = await projectsCollection.insertOne(bike);
        //     res.json(result);
        // })
        // DELETING BIKE DATA
        // app.delete('/projects/:id', async (req, res) => {
        //     const id = req.params.id;
        //     const query = { _id: ObjectId(id) };
        //     const result = await projectsCollection.deleteOne(query);
        //     res.json(result);
        // })

        ///////////////////////////////////////
    }
    finally {
        // await client.close();
    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('portfolio Server is on');
})

app.listen(port, () => {
    console.log(`listening at ${port}`)
})