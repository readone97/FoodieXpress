
import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Nabar";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";

// Default styles for wallet modal
import "@solana/wallet-adapter-react-ui/styles.css";

const App = () => {
  const network = WalletAdapterNetwork.Devnet; // Use Mainnet or Testnet as needed
  const endpoint = clusterApiUrl(network);

  // Initialize wallets
  const wallets = [new PhantomWalletAdapter(), new SolflareWalletAdapter()];

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          {/* Your app components */}
          <div className="App">
               <Navbar />
              <Hero />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
};

export default App;

