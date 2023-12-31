import WinnerSelected from "../eventsListeners/WinnerSelected";
import PrizesPaid from "../eventsListeners/PrizesPaid";

const News = () => {
  return (
    <div className="">
      <div className="mb-5">
        <h1 className="text-bold text-4xl">Recent Draws</h1>
        <WinnerSelected />
      </div>
      <div className="mb-5">
        <h1 className="text-bold text-4xl">Recent Winners Paid</h1>
        <PrizesPaid />
      </div>
    </div>
  );
};
export default News;
