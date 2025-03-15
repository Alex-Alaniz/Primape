import { TableOfContents } from "@/components/toc"

export default function AboutPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">About PrimapePrediction</h1>

      <h2 id="overview">Overview</h2>
      <p>
        PrimapePrediction is a state-of-the-art multi-outcome prediction market platform that leverages blockchain
        technology to provide a transparent, efficient, and engaging way for users to bet on future events.
      </p>

      <h2 id="our-mission">Our Mission</h2>
      <p>
        Our mission is to democratize prediction markets by providing a platform that is accessible, fair, and rewarding
        for all participants. We aim to harness the wisdom of the crowd to create more accurate forecasts for a wide
        range of events.
      </p>

      <h2 id="key-features">Key Features</h2>
      <ul>
        <li>
          <strong>Multi-Outcome Markets:</strong> Support for markets with multiple possible outcomes, not just binary
          choices.
        </li>
        <li>
          <strong>Pari-Mutuel Mechanics:</strong> All bets on the same outcome are pooled together, with winnings
          distributed proportionally.
        </li>
        <li>
          <strong>Adjustable Platform Fee:</strong> Flexible fee structure to ensure platform sustainability.
        </li>
        <li>
          <strong>Early Resolution & Claim Deadlines:</strong> Efficient market resolution and claiming process.
        </li>
        <li>
          <strong>Claims and Batch Claims:</strong> User-friendly options for claiming winnings.
        </li>
        <li>
          <strong>Unclaimed Funds Sweep:</strong> Mechanism to prevent funds from remaining stuck in the contract.
        </li>
      </ul>

      <h2 id="how-it-works">How It Works</h2>
      <p>PrimapePrediction operates on a simple yet powerful model:</p>
      <ol>
        <li>Markets are created by the platform owner or designated creators.</li>
        <li>Users buy shares in their predicted outcomes.</li>
        <li>Once the event concludes, the market is resolved.</li>
        <li>Winners claim their earnings, which include their original stake plus a share of the losing pool.</li>
        <li>Any unclaimed funds after the deadline can be swept by the platform owner.</li>
      </ol>

      <h2 id="technology-stack">Technology Stack</h2>
      <p>
        PrimapePrediction is built on robust blockchain technology, ensuring transparency, security, and immutability of
        all transactions and market resolutions.
      </p>

      <h2 id="get-involved">Get Involved</h2>
      <p>
        Whether you&apos;re a seasoned trader, a curious newcomer, or a developer looking to integrate with our platform,
        there&apos;s a place for you in the PrimapePrediction ecosystem. Join us in shaping the future of prediction markets!
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

