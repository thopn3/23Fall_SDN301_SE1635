import Product from "../models/Product.js";

// Get all Products
async function getProducts(){
    try {
        return await Product.find()
    } catch (error) {
        throw new Error(error.message)
    }
}

// Create a new Product
async function createProduct({name, price, quantity, description}){
    try {
        return await Product.create({name, price, quantity, description})
    } catch (error) {
        throw new Error(error.message)
    }
}

export default {
    getProducts,
    createProduct
}