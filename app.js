require('./db/connect')
const express = require ('express')
const app = express()
const tasks = require('./routes/task')

app.use(express.static('./public'))
app.use(express.json())

// app.get('/hello',(req,res)=>{
//     res.send('Task Manager')
// })

app.use('/api/v1/tasks',tasks)  




const port = 3000;
app.listen(port,console.log(`Server is listening on port ${port}.....`))
