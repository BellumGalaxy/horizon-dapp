import { useContract, useContractWrite, Web3Button } from "@thirdweb-dev/react";
import Horizon_ABI from "../contracts_abi/Horizon.json";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";
const stablecoin = "0xA372e43b968AB1Cbf921dC198a8B6dD831cEEf56";

const TitleAmercement = ({titleId}) => {
  const { _format, contractName, sourceName, abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { mutateAsync, isLoading } = useContractWrite(
    contract,
    "protocolWithdraw"
  );

  return (
    <div>
      <Web3Button
        contractAddress={contractAddress}
        contractAbi={abi}
        action={() =>
          mutateAsync({
            args: [titleId, stablecoin],
          })
        }
        disable={isLoading}
        onSuccess={(result) => console.log(result)}
        onError={(error) => console.log(error)}
      >
        Withdraw
      </Web3Button>
    </div>
  );
};
export default TitleAmercement;
