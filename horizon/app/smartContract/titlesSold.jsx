import { useContract, useContractRead } from "@thirdweb-dev/react";
import MyContractsTable from "../components/MyContractsTable";

const titlesSold = ({titleId, contractId}) => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(
    "0x57F4E779e346C285b2b4B6A342F01c471dcf224d",
    abi
  );
  const { data, isLoading } = useContractRead(contract, "titleSoldInfos", [
    titleId,
    contractId,
  ]);

  console.log(data);

  return (
    <div>
      <MyContractsTable readableData={data} />
    </div>
  );
};
export default titlesSold;
