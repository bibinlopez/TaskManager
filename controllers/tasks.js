const Task = require('../models/task')
const getAllTasks = (req,res)=>{
    Task.find({})
    .then((tasks)=>{
        return res.status(200).json({
            tasks
        })
    })
    
}

const createTask = (req,res)=>{
    
    const task = new Task(req.body)
    task.save()
    .then((task)=>{
        return res.status(200).json({
            sucess: true,
            data: task
        })
    })
    
}

const getTask = (req,res)=>{
    console.log(req.params);
    const {id:taskID} = req.params
    Task.findOne({_id: taskID})
    .then((task)=>{
        if (task) {
            return res.status(200).json({
                task
            })
        } else {
            return res.status(422).json({
                success: false,
                error: " not found"
            })
        }
    })
   
}

const deleteTask = (req,res)=>{
    Task.findByIdAndRemove(req.params.id)
    .then((task)=>{
        if (task) {
            return res.status(200).json({
                success: true,
                msg: 'successfully Deleted'
            })
        } else {
            return res.status(422).json({
                success: false,
                error: "Id not found"
            })
        }
    })

}


const updateTask = (req,res)=>{
    
    Task.findOneAndUpdate({_id: req.params.id},req.body,{
        new: true ,runValidators :true
    })
    .then((task)=>{
        if (task) {
            return res.status(200).json({
                task
            })
        } else {
            return res.status(422).json({
                success: false,
                error: "Id not found"
            })
        }
    })
    
}


module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}

