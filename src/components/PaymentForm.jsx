import React, { useCallback } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

const PaymentForm = () => {
  const { publicKey, sendTransaction } = useWallet();

  const handlePayment = useCallback(async () => {
    if (!publicKey) {
      alert("Please connect your wallet first!");
      return;
    }

    try {
      // Create a transaction to send SOL
      const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new web3.PublicKey("SELLER_PUBLIC_KEY"), // Replace with seller's wallet
          lamports: web3.LAMPORTS_PER_SOL * 0.1, // Amount in SOL (0.1 SOL here)
        })
      );

      const signature = await sendTransaction(transaction, connection);
      alert(`Transaction sent! Signature: ${signature}`);
    } catch (error) {
      console.error("Payment error:", error);
      alert("Payment failed!");
    }
  }, [publicKey, sendTransaction]);

  return (
    <div className="payment-form">
      
      <WalletMultiButton />
      <button onClick={handlePayment} className="btn">
        
      </button>
    </div>
  );
};

export default PaymentForm;
