import { TableOfContents } from "@/components/toc"

export default function SDKPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">PrimapePrediction SDK</h1>

      <h2 id="introduction">Introduction</h2>
      <p>
        The PrimapePrediction SDK provides a simple way to interact with our prediction markets from your JavaScript or
        TypeScript applications.
      </p>

      <h2 id="installation">Installation</h2>
      <p>You can install the PrimapePrediction SDK using npm or yarn:</p>
      <pre>
        <code>npm install @primapeprediction/sdk</code>
      </pre>
      <p>or</p>
      <pre>
        <code>yarn add @primapeprediction/sdk</code>
      </pre>

      <h2 id="usage">Usage</h2>
      <p>Here&apos;s a basic example of how to use the SDK to interact with a prediction market:</p>
      <pre>
        <code>
          {`
      import { PrimapePrediction } from '@primapeprediction/sdk';

      const prediction = new PrimapePrediction({
        provider: window.ethereum,
        networkId: 42161 // Arbitrum One
      });

      // Get all open markets
      const markets = await prediction.getMarkets({ status: 'open' });

      // Buy shares in a market
      const marketId = markets[0].id;
      const tx = await prediction.buyShares(marketId, 'Yes', ethers.utils.parseEther('0.1'));
      await tx.wait();

      console.log('Shares bought successfully!');
      `}
        </code>
      </pre>

      <h2 id="api-reference">API Reference</h2>
      <h3 id="prediction-class">PrimapePrediction Class</h3>
      <p>The main class for interacting with the PrimapePrediction platform.</p>
      <h4 id="methods">Methods</h4>
      <ul>
        <li>
          <code>getMarkets(options?: MarketOptions): Promise&lt;Market[]&gt;</code>
        </li>
        <li>
          <code>createMarket(params: CreateMarketParams): Promise&lt;Transaction&gt;</code>
        </li>
        <li>
          <code>buyShares(marketId: string, outcome: string, amount: BigNumber): Promise&lt;Transaction&gt;</code>
        </li>
        <li>
          <code>sellShares(marketId: string, outcome: string, amount: BigNumber): Promise&lt;Transaction&gt;</code>
        </li>
      </ul>

      <h2 id="error-handling">Error Handling</h2>
      <p>The SDK uses a custom Error class, PrimapePredictionError. You can catch and handle these errors like this:</p>
      <pre>
        <code>
          {`
      try {
        await prediction.buyShares(marketId, 'Yes', amount);
      } catch (error) {
        if (error instanceof PrimapePredictionError) {
          console.error('PrimapePrediction error:', error.message);
        } else {
          console.error('Unexpected error:', error);
        }
      }
      `}
        </code>
      </pre>

      <h2 id="advanced-usage">Advanced Usage</h2>
      <p>
        For more advanced usage, including subscribing to events and interacting with specific contracts directly,
        please refer to our advanced documentation.
      </p>

      <h2 id="support">Support</h2>
      <p>
        If you encounter any issues or have questions about the SDK, please open an issue on our GitHub repository or
        join our Discord community for support.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

