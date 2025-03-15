import { TableOfContents } from "@/components/toc"

export default function HomePage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">PrimapePrediction Documentation</h1>

      <h2 id="welcome-to-primapeprediction">Welcome to PrimapePrediction</h2>
      <p>
        PrimapePrediction is a cutting-edge multi-outcome prediction market platform built on blockchain technology. Our
        platform allows users to bet on the results of future events using a pari-mutuel model, where all losing bets
        are redistributed to the winning side proportional to their share of the winning pool.
      </p>

      <h2 id="key-features">Key Features</h2>
      <ul>
        <li>Multi-Outcome Markets</li>
        <li>Pari-Mutuel Mechanics</li>
        <li>Adjustable Platform Fee</li>
        <li>Early Resolution & Claim Deadlines</li>
        <li>Claims and Batch Claims</li>
        <li>Unclaimed Funds Sweep</li>
      </ul>

      <h2 id="how-it-works">How It Works</h2>
      <ol>
        <li>
          <strong>Creation:</strong> The owner or market creators set up new prediction markets.
        </li>
        <li>
          <strong>Betting:</strong> Users buy shares in their chosen outcomes.
        </li>
        <li>
          <strong>Resolution:</strong> Once the outcome is known, the market is resolved.
        </li>
        <li>
          <strong>Claiming Winnings:</strong> Winners claim their earnings before the deadline.
        </li>
        <li>
          <strong>Sweeping Unclaimed Funds:</strong> After the deadline, unclaimed funds can be swept by the owner.
        </li>
      </ol>

      <h2 id="getting-started">Getting Started</h2>
      <p>
        New to PrimapePrediction? Check out our <a href="/quick-start">Quick Start Guide</a> to begin your journey into
        decentralized prediction markets.
      </p>

      <h2 id="for-developers">For Developers</h2>
      <p>
        Interested in integrating with PrimapePrediction? Explore our <a href="/develop/contracts">Smart Contracts</a>{" "}
        documentation.
      </p>

      <h2 id="join-our-community">Join Our Community</h2>
      <p>
        Connect with other traders, ask questions, and stay updated on the latest developments in our community
        channels.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

