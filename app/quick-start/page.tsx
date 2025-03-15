import { TableOfContents } from "@/components/toc"

export default function QuickStartPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Quick Start Guide</h1>

      <h2 id="introduction">Introduction</h2>
      <p>Get started with PrimapePrediction in just a few simple steps.</p>

      <h2 id="connect-your-wallet">1. Connect Your Wallet</h2>
      <p>
        To interact with PrimapePrediction, you&apos;ll need to connect a compatible Ethereum wallet. We support MetaMask,
        WalletConnect, and other popular Ethereum wallets.
      </p>

      <h2 id="explore-available-markets">2. Explore Available Markets</h2>
      <p>
        Browse through the list of open prediction markets. You can filter by category, end time, or total pool size.
      </p>

      <h2 id="buy-shares">3. Buy Shares</h2>
      <p>
        Once you&apos;ve found a market you&apos;re interested in, buy shares in the outcome you predict will occur. Remember, you
        can buy shares in multiple outcomes if you wish.
      </p>

      <h2 id="wait-for-market-resolution">4. Wait for Market Resolution</h2>
      <p>After the event occurs, the market will be resolved by the platform owner or designated resolvers.</p>

      <h2 id="claim-your-winnings">5. Claim Your Winnings</h2>
      <p>
        If your predicted outcome is correct, you can claim your winnings. Make sure to claim before the claim deadline!
      </p>

      <h2 id="example-participating-in-a-market">Example: Participating in a Market</h2>
      <pre>
        <code>
          {`
      // Assuming you've already connected your wallet
      
      // Get market info
      const marketInfo = await contract.getMarketInfo(marketId);
      console.log(marketInfo);

      // Buy shares
      const optionIndex = 1; // The index of your chosen outcome
      const amountToBet = ethers.utils.parseEther("0.1"); // Betting 0.1 ETH
      await contract.buyShares(marketId, optionIndex, { value: amountToBet });

      // After market resolution, if you've won:
      await contract.claimWinnings(marketId);
      `}
        </code>
      </pre>

      <h2 id="next-steps">Next Steps</h2>
      <p>
        Dive deeper into our documentation to learn about advanced features, market creation (for authorized creators),
        and more.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

