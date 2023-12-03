import { BigNumber } from "ethers";
import { useEffect, useState } from "react";

const MyContractsTable = ({ data }) => {
  const [formattedData, setFormattedData] = useState([]);
  
  useEffect(() => {
    if (data) {
      const bigNumberData = Object.values(data).map((value) =>
      BigNumber.isBigNumber(value) ? value.toString() : value
      );
      
      const convertedData = bigNumberData.map((value, index) => {
        if ([1, 3, 7].includes(index)) {
          return convertWeiToDollar(value);
        }
        return value;
      });
      
      setFormattedData(convertedData);
    }
  }, [data]);
  
  const convertWeiToDollar = (wei) => {
    return wei ? parseFloat(wei) / 10 ** 18 : 0;
  };
  console.log(formattedData);

  return (
    <div>
      <table className="">
        <thead>
          <tr>
            <th>Your Contract Id:</th>
            <th className="text-center">{formattedData[0]}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title Value:</td>
            <td className="text-center">{formattedData[1]}</td>
          </tr>
          <tr>
            <td>Installments:</td>
            <td className="text-center">{formattedData[2]}</td>
          </tr>
          <tr>
            <td>Monthly Value:</td>
            <td className="text-center">{formattedData[3]}</td>
          </tr>
          <tr>
            <td>Months Locked:</td>
            <td className="text-center">{formattedData[4]}</td>
          </tr>
          <tr>
            <td>Owner:</td>
            <td className="text-center">{formattedData[5]}</td>
          </tr>
          <tr>
            <td>Installments Paid:</td>
            <td className="text-center">{formattedData[6]}</td>
          </tr>
          <tr>
            <td>Draw You Were Selected:</td>
            <td className="text-center">{formattedData[7]}</td>
          </tr>
          <tr>
            <td>Your Colateral Id:</td>
            <td className="text-center">{formattedData[8]}</td>
          </tr>
          <tr>
            <td>Your Colateral Title Address:</td>
            <td className="text-center">{formattedData[9]}</td>
          </tr>
          <tr>
            <td>Your Colateral RWA Address:</td>
            <td className="text-center">{formattedData[10]}</td>
          </tr>
          <tr>
            <td>value of Ensurance Needed :</td>
            <td className="text-center">{formattedData[11]}</td>
          </tr>
          <tr>
            <td>Your Title Status:</td>
            <td className="text-center">{formattedData[12]}</td>
          </tr>
          <tr>
            <td>Withdraw:</td>
            <td className="text-center">{formattedData[13]}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default MyContractsTable;
