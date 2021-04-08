import Woocomerce from '../lib/woocommerce'

const api = new Woocomerce()

export const getAllProducts = async () => {
    return await api.get('/products')
}