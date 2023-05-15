const { Router } = require('express')
const { addProduct, getProduct, updateProduct, deleteProduct, addBulkProduct } = require('../../controller/product/product.controller')
const { upload } = require('../../middleware/files.middleware')
const productRoutes = Router()
productRoutes.post('/', addProduct)
productRoutes.post('/bulk',  addBulkProduct)/* upload.single('product.csv'), */
productRoutes.get('/', getProduct)
productRoutes.put('/', updateProduct)
productRoutes.delete('/', deleteProduct)

module.exports = {
    productRoutes
}