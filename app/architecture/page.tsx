import { TableOfContents } from "@/components/toc"

export default function ArchitecturePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">PrimapePrediction Architecture</h1>

      <h2 id="overview">Overview</h2>
      <p>
        PrimapePrediction is built on top of advanced blockchain infrastructure to provide the best possible experience
        for prediction markets.
      </p>

      <h2 id="platform-features">Platform Features</h2>
      <ul>
        <li>Full EVM equivalence</li>
        <li>Anytrust Data Availability for ultra-low-cost transactions</li>
        <li>Dedicated throughput and increased gas price reliability</li>
        <li>Independence and upgradability</li>
      </ul>

      <h2 id="security-model">Security Model</h2>
      <p>
        By settling on Arbitrum One, PrimapePrediction is able to leverage Arbitrum&apos;s security and infrastructure, while
        still maintaining the benefits of being an independent chain. As Arbitrum One is itself settling on and secured
        by Ethereum, PrimapePrediction is able to benefit from Ethereum&apos;s security and liquidity.
      </p>

      <h2 id="further-reading">Further Reading</h2>
      <p>Learn more about our architecture and technical specifications in our detailed documentation.</p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

