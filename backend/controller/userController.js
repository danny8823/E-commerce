const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = require('../model/User')

const userController = {
    login: asyncHandler(async(req,res) => {
        const {email,password} = req.body
         
        const user = await User.findOne({email})

        if(!user) {
            throw new Error('Invalid credentials')
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if(!isMatch) {
            throw new Error('Invalid credentials')
        }

        const token = jwt.sign(
            {
                id: user._id
            },
            process.env.JWT_SECRET,
            {
                expiresIn: '30d'
            }
        )

        res.json({
            message: 'Login successful',
            token,
            id: user._id,
            email: user.email,
            username: user.username
        })
    }),

    register: asyncHandler(async (req,res) => {
        try{
            const {username,email,password} = req.body

            if (!username || !email || !password) {
                throw new Error('Please fill out all fields.')
            }

            const userExists = await User.findOne({email})

            if(userExists) {
                throw new Error('This user already exists.')
            }

            const salt = await bcrypt.genSalt(10)
            const hashedPassword = await bcrypt.hash(password, salt)

            const userCreated = await User.create({
                username,
                email,
                password:hashedPassword
            })

            res.json({
                id: userCreated._id,
                username: userCreated.username,
                email: userCreated.email,
            })

        }catch(error) {
            throw new Error(error.message)
        }
    }),

    profile:asyncHandler(async(req,res) => {
        const user = await User.findById(req.user)
            .select('-password')
        res.json({
            user
        })
    })
}

module.exports = userController