import { TableOfContents } from "@/components/toc"

export default function ConnectWalletPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Connect Your Wallet</h1>

      <h2 id="introduction">Introduction</h2>
      <p>
        To interact with PrimapePrediction, you need to connect a compatible Ethereum wallet. Follow these steps to get
        started.
      </p>

      <h2 id="supported-wallets">Supported Wallets</h2>
      <ul>
        <li>MetaMask</li>
        <li>WalletConnect</li>
        <li>Coinbase Wallet</li>
        <li>Trust Wallet</li>
      </ul>

      <h2 id="connection-steps">Connection Steps</h2>
      <ol>
        <li>Click the "Connect Wallet" button in the top right corner of the PrimapePrediction interface.</li>
        <li>Choose your preferred wallet from the list of supported options.</li>
        <li>Follow the prompts in your wallet to approve the connection.</li>
        <li>Once connected, you'll see your wallet address displayed in the interface.</li>
      </ol>

      <h2 id="network-configuration">Network Configuration</h2>
      <p>
        Ensure your wallet is configured to use the Arbitrum One network. If it's not already set up, you may need to
        add the network manually.
      </p>

      <h2 id="troubleshooting">Troubleshooting</h2>
      <p>If you encounter any issues connecting your wallet, try the following:</p>
      <ul>
        <li>Refresh the page and try again</li>
        <li>Ensure your wallet is unlocked</li>
        <li>Clear your browser cache</li>
        <li>Check for any pending transactions in your wallet</li>
      </ul>

      <h2 id="security-note">Security Note</h2>
      <p>
        Always be cautious when connecting your wallet to any dApp. Verify you're on the correct PrimapePrediction
        website before approving any connections or transactions.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

