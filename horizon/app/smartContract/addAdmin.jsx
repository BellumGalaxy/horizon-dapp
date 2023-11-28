export default function Component() {
  const { contract } = useContract(
    "0x3547951AAA367094AFABcaE24f123473fF502bFa"
  );
  const { mutateAsync: addAdmin, isLoading } = useContractWrite(
    contract,
    "addAdmin"
  );

  const call = async () => {
    try {
      const data = await addAdmin({ args: [_wallet] });
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  };
}
