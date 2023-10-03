import { productRepository } from '../repositories/index.js'

async function getAllProducts(req, res) {
    try {
        res.status(200).json({
            message: 'Get all products successfully.',
            data: await productRepository.getProducts()
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

async function createProduct(req, res) {
    try {
        const {name, price, quantity, description} = req.body
        res.status(200).json({
            message: 'Create a new product successfully',
            data: await productRepository.createProduct({name, price,quantity,description})
        })
    } catch (error) {
        res.status(500).json({
            message: error.toString()
        })
    }
}

export default {
    getAllProducts,
    createProduct
}