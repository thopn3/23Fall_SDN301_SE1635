import express from 'express'
import {body, validationResult} from 'express-validator'

// Khai báo đối tượng Router
const userRouter = express.Router()

userRouter.get('/', (req, res)=>{
    res.send('Get all users')
})

userRouter.get('/:id', (req, res)=>{
    res.send('Get user by Id')
})

userRouter.post('/create', (req, res)=>{
    // debugger
    res.send('Add new user')
})

userRouter.put('/edit', (req, res)=>{
    res.send('Edit user')
})

userRouter.delete('/delete/:id', (req, res)=>{
    res.send('Delete user')
})

userRouter.post('/login',
    body("email").isEmail().withMessage('Email invalid format!'),
    body("password").isLength({min:5}),
    async (req, res)=>{
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()})
        }
        res.status(200).json(req.body)
    }
)

export default userRouter