const User = require('../models/user');

const router = require('express').Router();

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     summary: Register a new user
 *     tags: [Users Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - age
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: User successfully registered
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: done
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */


router.post('/signup',async(req,res)=>{
    try{
        const {name,age,email,password} = req.body;
        const user = new User({name,age,email,password});
        const data = await user.save();
        res.status(200).json({msg:"done"})
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
})

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Authenticate a user
 *     tags: [Users Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Info:
 *                   type: string
 *                   example: login successful
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       email:
 *                         type: string
 *                       password:
 *                         type: string
 *                       age:
 *                         type: number
 *       404:
 *         description: User not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Info:
 *                   type: string
 *                   example: user not found
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 */

router.post('/login',async(req,res)=>{
    try{
        const {email,password} = req.body;
        const customer = await User.find({email,password})
        console.log(customer);

        if(customer.length>0){
            res.status(200).json({Info:"login successful",data:customer})
        }

        else{
            res.status(404).json({Info:"user not found"})
        }
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
})

module.exports = router;