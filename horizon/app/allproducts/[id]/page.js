"use client";
import AllTitles from "../../smartContract/allTitles";
import Carousel from "../../components/Carousel";
import WithdrawConditionsModal from "../../components/WithdrawConditionsModal";
import FeesModal from "../../components/FeesModal";
import Link from "next/link";

const TitleDetails = ({ params }) => {
  console.log(params[0]);
  console.log(params[1]);
  return (
    <main>
      <Carousel />
      <div className="mt-5">
        <h3 className="font-bold text-lg my-3">About the Title</h3>
        <p className="my-1">
          This title is a means of self-financing where individuals or legal
          entities come together to form a joint fund and enable the acquisition
          of real estate, furniture or services for each of them.
        </p>
        <p>For specific information regarding this title, read below.</p>
      </div>

      <AllTitles titleId={params.id} />

      {/* Condições de Saque  */}
      <div className="mb-3">
        <h3 className="font-bold text-lg my-3">Withdraw Conditions</h3>
        <p className="my-1">
          At the time of purchase, a significant decision needs to be made that
          will influence the amount you pay monthly.
        </p>
        <p className="my-1">
          You need to inform us whether you plan to allocate a guarantee and
          make a withdrawal after any draw period in which you are selected, or
          if you prefer to wait for longer periods.
        </p>
        <p className="my-1">This decision cannot be changed later.</p>
        <p className="my-1">
          Are you unsure about which option to choose? To better understand the
          available options, read below:
        </p>
      </div>

      <WithdrawConditionsModal />

      {/* Taxas  */}
      <div className="mb-3">
        <h3 className="font-bold text-lg my-3">Fees</h3>
        <p className="my-1">
          As mentioned previously, the withdrawal condition will influence the
          amounts paid monthly.
        </p>
        <p className="my-1">
          So let's go in and answer all your questions so you can make the best
          decision according to your financial condition and personal goals.
        </p>
      </div>

      <FeesModal />

      {/* Alocação de Garantias  */}
      <div className="mb-3">
        <h3 className="font-bold text-lg my-3">Warranty Allocation</h3>
        <p className="my-1">
          Allocation of Collateral is currently limited to two types, being Real
          World Assets (RWA) and Securities.
        </p>
        <p className="my-1">
          For allocation to occur, each type must meet some basic parameters.
          See below.
        </p>
        {/* TITLES */}
        <h2 className="font-bold text-md my-3">Titles</h2>
        <p className="my-1">
          1 - To allocate a title as collateral, both titles must belong to the
          same wallet address. This means that the drawn title and the title
          used as collateral must be owned by the same individual.
        </p>
        <p className="my-1">
          2 - The title to be used as collateral must either be fully paid off,
          or the amount already paid should be at least double the outstanding
          balance on the drawn title.
        </p>
        {/* RWA */}
        <h2 className="font-bold text-md my-3">Real Word Assets</h2>
        <p className="my-1">
          1 - To allocate an asset as collateral, the owner of the Title must be
          the same as that of the Asset. It is not possible to add an asset that
          does not belong to the same wallet address as the Title.
        </p>
        <p className="my-1">
          2 - The asset designated as collateral must not have any pending
          regulatory or financial issues. Additionally, its total value must be
          at least five times greater than the outstanding value of the Title.
        </p>
      </div>

      {/* Taxas de inadimplencia  */}
      <h3 className="font-bold text-lg my-3">Interest Rates</h3>
      <p className="my-1">
        Interest rates are only applicable on titles that are in arrears and are
        divided into Base Rate and Daily Rate.
      </p>
      <p className="my-1">
        It is important to mention that a Title that is overdue will not
        participate in the monthly draws.
      </p>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Base Rate:</th>
            <td className="font-bold">10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Daily Rate:</th>
            <td className="font-bold">3%</td>
          </tr>
        </tbody>
      </table>
      <h2 className="font-bold text-md my-3">
        How are interest rates calculated?
      </h2>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>First day:</th>
            <td className="font-bold">10%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Second day:</th>
            <td className="font-bold">6%</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Subsequent days:</th>
            <td className="font-bold">3%</td>
          </tr>
        </tbody>
      </table>
      <p className="my-1">
        The application is simple interest. That is, assuming that the monthly
        payment is $100 and the delay is 3 days.
      </p>
      <table className="table">
        <tbody>
          {/* row 1 */}
          <tr>
            <th>Total interest:</th>
            <td className="font-bold">10% + 6% +3%</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>Installment Value:</th>
            <td className="font-bold">100 + 19%.</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>Amount to be paid:</th>
            <td className="font-bold">$119</td>
          </tr>
        </tbody>
      </table>

      {/* Cancelamentos  */}
      <h3 className="font-bold text-lg my-3">Cancellations</h3>
      <p className="my-1">
        Cancellation is a drastic but necessary measure to ensure the smooth
        operation of the protocol and to maintain respect for other
        participants.
      </p>
      <p className="my-1">
        A cancellation will be enforced if there are two consecutive late
        payments on the Bond.
      </p>
      <p className="my-1">
        If the Title is cancelled, the amount paid up to that point will be
        retained by the protocol as a penalty.
      </p>
      <p className="my-1">
        In instances where a guarantee has been allocated, it will be liquidated
        to cover costs incurred due to the delay.
      </p>
      <button className="btn btn-block btn-neutral text-base-100 text-lg mt-5">
        <Link href={`/allproducts/${params.id}/checkout/`}>
          I agree with the information and want to buy!
        </Link>
      </button>
    </main>
  );
};
export default TitleDetails;
