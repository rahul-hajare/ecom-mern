import Product from '../models/productModel.js'
import asyncHandler from 'express-async-handler'

const getProducts = asyncHandler(async(req, res) => {
    const products = await Product.find({})
    res.json(products)
})

const getProductById = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        res.json(product)
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

const deleteProduct = asyncHandler(async(req, res) => {
    const product = await Product.findById(req.params.id)

    if(product){
        await product.remove()
        res.json({message: 'Product Deleted'})
    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

//Create a Product
const createProduct = asyncHandler(async(req, res) => {
    const product = new Product({
        name: 'Sample Name',
        price: 0,
        user: req.user._id,
        image: '/images/sample.jpg',
        brand: 'Sample Brand',
        category: 'Sample Category',
        countInStock: 0,
        numReviews: 0,
        description: 'sample description'
    })

    const createdProduct = await product.save()
    res.status(201).json(createdProduct)
})

//Update Product
const updateProduct = asyncHandler(async(req, res) => {
    const {name, price, image, brand, category, countInStock, numReviews, description} = req.body

    const product = await Product.findById(req.params.id)

    if(product){
        product.name = name
        product.price = price
        product.category = category
        product.brand = brand
        product.description = description
        product.countInStock = countInStock
        product.numReviews = numReviews
        product.image = image

        const updatedProduct = await product.save()
        res.json(updatedProduct)

    }else{
        res.status(404)
        throw new Error('Product Not Found')
    }
})

export {getProducts, getProductById, deleteProduct, createProduct, updateProduct}