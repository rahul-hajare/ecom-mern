import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()

        const createdUser = await User.insertMany(users)
        const adminUser = createdUser[0]._id
        const sampleProduct = products.map(product => {
            return {...product, user: adminUser}
        })

        await Product.insertMany(sampleProduct)
        console.log('Data Imported')
        process.exit()

    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

const destryData = async () => {
    try {
        await Order.deleteMany()
        await User.deleteMany()
        await Product.deleteMany()
        console.log('Data Destroyed')
        process.exit()
    } catch (error) {
        console.log(`${error}`)
        process.exit(1)
    }
}

if(process.argv[2] === '-d'){
    destryData()
}else{
    importData()
}


