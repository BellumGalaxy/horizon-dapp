import { useContract, useContractRead } from "@thirdweb-dev/react";

export default function PaymentDeadline() {
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa"
  );
  const { data, isLoading } = useContractRead(
    contract,
    "returnPaymentDeadline",
    [_scheduleId, _installmentNumber]
  );
}
