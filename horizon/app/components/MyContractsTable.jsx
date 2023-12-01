const MyContractsTable = ({readableData}) => {
    const data = readableData;
    console.log(data);
  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Your Contract Id:</th>
            <th className="text-center">{readableData[0]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title Value:</td>
            <td className="text-center">{readableData[1]}</td>
          </tr>
          <tr>
            <td>Installments:</td>
            <td className="text-center">{readableData[2]}</td>
          </tr>
          <tr>
            <td>Monthly Value:</td>
            <td className="text-center">{readableData[3]}</td>
          </tr>
          <tr>
            <td>Months Locked:</td>
            <td className="text-center">{readableData[4]}</td>
          </tr>
          <tr>
            <td>Owner:</td>
            <td className="text-center">{readableData[5]}</td>
          </tr>
          <tr>
            <td>Installments Paid:</td>
            <td className="text-center">{readableData[6]}</td>
          </tr>
          <tr>
            <td>Draw You Were Selected:</td>
            <td className="text-center">{readableData[7]}</td>
          </tr>
          <tr>
            <td>Your Colateral Id:</td>
            <td className="text-center">{readableData[8]}</td>
          </tr>
          <tr>
            <td>Your Colateral Title Address:</td>
            <td className="text-center">{readableData[9]}</td>
          </tr>
          <tr>
            <td>Your Colateral RWA Address:</td>
            <td className="text-center">{readableData[10]}</td>
          </tr>
          <tr>
            <td>Your Title Status:</td>
            <td className="text-center">{readableData[11]}</td>
          </tr>
          <tr>
            <td>Withdraw:</td>
            <td className="text-center">{readableData[12]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default MyContractsTable