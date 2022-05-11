const db= require('./db');
const express= require('express');


const app= express();

app.use(express.json())

app.get('/movies', (req, res) => {
    let sql= 'Select * from movies;';
    db.query(sql, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result)
        console.log(result)
    })
})

app.get('/movies/:column/:name', (req, res) => {
    let sql= `Select * from movies where ${req.params.column} = "${req.params.name}";`
    db.query(sql, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send(result)
        console.log(result)
    })
})

app.post('/movies/insert', (req, res) => {
    const json= req.body;
    let sql= `Insert into movies values("${json.name}", "${json.actor}", "${json.actress}", "${json.director}", ${json.year_of_release});`
    db.query(sql, (error, result) => {
        if(error){
            console.log(error);
        }
        res.send('record inserted successfully')
    })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })