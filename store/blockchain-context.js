import { createContext, useState, useEffect } from 'react';
import { getFactorySigner } from "../ethereum/factory";

const BlockchainContext = createContext({});

export function BlockchainContextProvider(props) {
    const [provider, setProvider] = useState();
    const [isLoaded, setIsloaded] = useState(false);

    useEffect(() => {
        async function fetchData() {
            const walletProvider = await getFactorySigner();
            setProvider(walletProvider);
            setIsloaded(true);
        }
        fetchData();
    }, []);

    const context = {
        provider, isLoaded
    };

    return (

        <BlockchainContext.Provider value={context}>
            {props.children}
        </BlockchainContext.Provider>)
}


export default BlockchainContext;
