import Layout from "../components/Layout"
import { getAllProducts } from "../utils/api"

export default function Home({ products }) {
    console.log(products)
    return (
        <Layout title="Next Woocommerce">
            <h2>Products</h2>
            <ul>
                {
                    products?.map((product, index) => (
                        <li key={ index }>{ product.name } ({ product.price })</li>
                    ))
                }
            </ul>
        </Layout>
    )
}

export async function getStaticProps(){
    const result  = await getAllProducts()
    const products = result.data

    return {
        props: {
            products
        }
    }
}