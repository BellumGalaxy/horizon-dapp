import { useState } from "react";
import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import HorizonR_ABI from "../contracts_abi/HorizonFujiR.json";
import { BigNumber } from "ethers";
import ThirdwebProviderApp from "../components/ThirdWebProvider";
import { AvalancheFuji } from "@thirdweb-dev/chains";

const contractAddress = "0xe5121F551333DD569602E82483641D8ad0D93718"

export default function AddCollateralF({ titleId, contractId, titleData }) {
  const [rwaId, setRwaId] = useState("");

  const handleRwaIdChange = (event) => {
    setRwaId(event.target.value);
  };

  const convertBigNumbers = (bigNumbers) => {
    return bigNumbers.map((bigNumber) =>
      BigNumber.isBigNumber(bigNumber) ? bigNumber.toString() : bigNumber
    );
  };

  const readableData = titleData
    ? convertBigNumbers(Object.values(titleData))
    : [];

  const drawSelected = readableData[7];

  const { _format, contractName, sourceName, abi } = HorizonR_ABI;
  const { contract } = useContract(contractAddress, abi);

  const { mutateAsync: addCollateral, isLoading } = useContractWrite(
    contract,
    "addCollateral"
  );

  const call = async () => {
    try {
      const data = await addCollateral({
        args: [titleId, contractId, drawSelected, rwaId],
      });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div>
      <h2 className="text-center">Enter your RWA identifier</h2>
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs m-2"
        value={rwaId}
        onChange={handleRwaIdChange}
      />
      <Web3Button
        contractAddress={contract}
        activeChain={AvalancheFuji}
        onClick={call}
      >
        {isLoading ? "Processing..." : "Add Collateral"}
      </Web3Button>
    </div>
  );
}
