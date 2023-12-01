import { useContract, useContractRead } from "@thirdweb-dev/react";
import MyContractsTable from "../components/MyContractsTable";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { useEffect } from "react";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d"

const TitlesSold = ({ titleId, contractId, onReceiveData }) => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: titleSoldInfos, isLoading } = useContractRead(
    contract,
    "titleSoldInfos",
    [titleId, contractId]
  );

  useEffect(() => {
    if (titleSoldInfos) {
      onReceiveData(titleSoldInfos);
    }
  }, [titleSoldInfos]);

  return (
    <div>
      <MyContractsTable data={titleSoldInfos} />
    </div>
  );
};
export default TitlesSold;
