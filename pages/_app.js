import 'semantic-ui-css/semantic.min.css'
import Layout from '../components/Layout'
import { BlockchainContextProvider } from '../store/blockchain-context';

import '@rainbow-me/rainbowkit/styles.css';

import {
    getDefaultWallets,
    RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {
    chain,
    configureChains,
    createClient,
    WagmiConfig,
} from 'wagmi';
import { infuraProvider } from 'wagmi/providers/infura';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [
        chain.mainnet,
        chain.goerli,
        chain.sepolia,
        chain.localhost,
        chain.hardhat,
        chain.polygon,
        chain.optimism,
        chain.arbitrum],
    [
        infuraProvider({ apiKey: process.env.INFURA_URL }),
        publicProvider()
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'CrowdFunding',
    chains
});

const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider
})



function MyApp({ Component, pageProps }) {
    return (
        <WagmiConfig client={wagmiClient}>
            <RainbowKitProvider chains={chains}>
                <BlockchainContextProvider>
                    <Layout>
                        <Component {...pageProps} />
                    </Layout>
                </BlockchainContextProvider>
            </RainbowKitProvider>
        </WagmiConfig>

    )
}

export default MyApp
