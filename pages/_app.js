import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import { BlockchainContextProvider } from '../store/blockchain-context';

function MyApp({ Component, pageProps }) {
    return (

        <BlockchainContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </BlockchainContextProvider>


    )
}

export default MyApp
