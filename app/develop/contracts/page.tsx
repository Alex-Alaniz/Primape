import { TableOfContents } from "@/components/toc"

export default function SmartContractsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">PrimapePrediction Smart Contracts</h1>

      <h2 id="overview">Overview</h2>
      <p>
        PrimapePrediction is powered by a sophisticated smart contract that handles all aspects of our multi-outcome
        prediction markets. This page provides an overview of the key functions and how to interact with them.
      </p>

      <h2 id="core-functions">Core Functions</h2>

      <h3 id="for-market-creators">For Market Creators</h3>
      <pre>
        <code>
          {`function createMarket(string memory question, string[] memory options, uint256 duration) external onlyOwnerOrCreator`}
        </code>
      </pre>
      <p>Creates a new prediction market with the given question, options, and duration.</p>

      <h3 id="for-users">For Users</h3>
      <pre>
        <code>{`function buyShares(uint256 marketId, uint256 optionIndex) external payable`}</code>
      </pre>
      <p>Allows users to buy shares in a specific outcome of a market.</p>

      <pre>
        <code>{`function claimWinnings(uint256 marketId) external`}</code>
      </pre>
      <p>Allows winners to claim their earnings after market resolution.</p>

      <h3 id="for-platform-owners">For Platform Owners</h3>
      <pre>
        <code>{`function resolveMarket(uint256 marketId, uint256 winningOptionIndex) external onlyOwner`}</code>
      </pre>
      <p>Resolves a market by setting the winning outcome.</p>

      <pre>
        <code>{`function setFeeBps(uint256 _feeBps) external onlyOwner`}</code>
      </pre>
      <p>Updates the platform fee (in basis points).</p>

      <pre>
        <code>{`function withdrawFees(address recipient, uint256 amount) external onlyOwner`}</code>
      </pre>
      <p>Withdraws accumulated platform fees.</p>

      <h2 id="view-functions">View Functions</h2>
      <pre>
        <code>
          {`function getMarketInfo(uint256 marketId) external view returns (string memory question, uint256 endTime, bool resolved, uint256 winningOptionIndex)
function getMarketOptions(uint256 marketId) external view returns (string[] memory)
function getUserShares(uint256 marketId, address user) external view returns (uint256[] memory)`}
        </code>
      </pre>
      <p>These functions allow querying various aspects of markets and user positions.</p>

      <h2 id="events">Events</h2>
      <p>The contract emits several events to facilitate off-chain tracking of on-chain actions:</p>
      <ul>
        <li>MarketCreated</li>
        <li>SharesBought</li>
        <li>MarketResolved</li>
        <li>WinningsClaimed</li>
      </ul>

      <h2 id="example">Example: Creating and Interacting with a Market</h2>
      <pre>
        <code>
          {`
      // Deploy the contract
      const PrimapePrediction = await ethers.getContractFactory("PrimapePrediction");
      const prediction = await PrimapePrediction.deploy();
      await prediction.deployed();

      // Create a market
      await prediction.createMarket(
        "Who will win the 2024 US Presidential Election?",
        ["Democrat", "Republican", "Other"],
        365 * 24 * 60 * 60 // 1 year duration
      );

      // Buy shares
      await prediction.buyShares(0, 1, { value: ethers.utils.parseEther("0.1") });

      // Resolve market (only owner)
      await prediction.resolveMarket(0, 1); // Assuming Republican wins

      // Claim winnings
      await prediction.claimWinnings(0);
      `}
        </code>
      </pre>

      <h2 id="security-considerations">Security Considerations</h2>
      <p>The PrimapePrediction contract includes several security measures:</p>
      <ul>
        <li>Role-based access control for market creation and resolution</li>
        <li>Checks for valid market IDs and option indices</li>
        <li>Claim deadlines to prevent indefinitely unclaimed funds</li>
      </ul>
      <p>
        However, as with any smart contract, users should exercise caution and understand the risks involved in
        participating in prediction markets.
      </p>

      <h2 id="audits">Audits</h2>
      <p>
        The PrimapePrediction contract has undergone thorough auditing. You can find the latest audit reports in our
        GitHub repository.
      </p>
      <div className="mt-8">
        <TableOfContents />
      </div>
    </div>
  )
}

