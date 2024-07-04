import path from 'path'
import fs from 'fs'
import { Product } from '../../domain/entities/Product'

interface GetAllProductsRequest {
  name?: string
}
export class GetAllProducts {
  getProducts() {
    const productsPath = path.join(__dirname, '../../../data/products.json')
    const productsData = fs.readFileSync(productsPath, 'utf-8')
    return JSON.parse(productsData)
  }
  async execute(request: GetAllProductsRequest) {
    const { name } = request
    let products: Product[] = this.getProducts()
    // an optional wildcard search param for name
    if (name) {
      const searchRegex = new RegExp(name.split('*').join('.*'), 'i')
      products = products.filter((product) => searchRegex.test(product.name))
    }
    return products
  }
}
