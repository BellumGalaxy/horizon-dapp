import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Our focus is on
        </h1>
        <div className="stats bg-accent shadow">
          <div className="stat">
            <div className="stat-title text-base-100 text-4xl font-bold tracking-widest">
              People
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Horizon represents a significant advancement in democratizing access to
        the Web3 ecosystem, with a special focus on the financial inclusion of
        middle and low-income individuals. By integrating innovative
        technologies such as Chainlink VRF, CCIP, Functions and Automation, and
        the integration with the FIPE Table, Horizon establishes a new standard
        in terms of security, transparency, and auditability in decentralized
        financial operations.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Through the implementation of a robust consortium system, Horizon not only facilitates the acquisition of goods and services but also paves the way for the efficient use of Tokenized Assets as collateral,
        expanding the possibilities for withdrawals and investments for users.
        This aspect is particularly revolutionary, as it leverages the potential of digital assets in a way that directly benefits the end-user while maintaining the integrity and sustainability of the system.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Furthermore, Horizon's structure is designed to evolve and adapt to the emerging needs of the market and users. With future plans that include the creation of a secondary market for titles, exploring partnerships for additional yields, and expanding into lending and financing services, Horizon is not just a solution for the present, but an investment in the future of decentralized finance.
      </p>
    </>
  );
};
export default AboutPage;
