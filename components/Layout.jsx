import Head from 'next/head'
import Navbar from './Navbar'

const Layout = ({ title, children }) => {
    return (
        <>
        <Head>
            <title>{ title }</title>
        </Head>
        <div className="app">
            <Navbar/>
            <main>
                { children }
            </main>
        </div>
        </>
    );
}
    
export default Layout