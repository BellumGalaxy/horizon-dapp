import { Web3Button, useContract, useContractWrite } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";
import { Mumbai } from "@thirdweb-dev/chains";

const contractAddress = "0x57F4E779e346C285b2b4B6A342F01c471dcf224d";

export default function AddRWA({ idTitle, contractId }) {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync: addRWACollateral, isLoading } = useContractWrite(
    contract,
    "addRWAColateral"
  );

  const call = async () => {
    try {
      const data = await addRWACollateral({ args: [idTitle, contractId] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
  return (
    <div>
      <h2 className="text-center">Do you want to add an RWA?</h2>
      <Web3Button
        contractAddress={contractAddress}
        activeChain={Mumbai}
        onClick={call}
      >
        {isLoading ? "Processing..." : "Add Collateral"}
      </Web3Button>
    </div>
  );
}
