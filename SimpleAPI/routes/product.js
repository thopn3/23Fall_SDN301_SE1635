import express from 'express'

// Khai báo đối tượng Router
const productRouter = express.Router()

productRouter.get('/', (req, res)=>{
    res.send('Get all products')
})

productRouter.get('/:id', (req, res)=>{
    res.send('Get product by Id')
})

productRouter.post('/create', (req, res)=>{
    res.send('Add new product')
})

productRouter.put('/edit', (req, res)=>{
    res.send('Edit product')
})

productRouter.delete('/delete/:id', (req, res)=>{
    res.send('Delete product')
})

export default productRouter