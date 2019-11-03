const express = require('express')
const router = express.Router()

const Users = require('./usersDb')

router.get('/', (req, res)=>{
    Users.find()
    .then(user=>{
        res.json(user)
    })

})

router.get('/:id', (req, res)=>{
    const {id} = req.params
    Users.findById(id)
    .then(user=>{
        if(!user){
            res.status(500).json({message:'User with the Specified ID Does Not Exist'})
        }else{
            res.json(user)
        }
    })
    .catch(()=>{
        res.status(404).json({errorMessage:'No content Found'})
    })
})
module.exports = router