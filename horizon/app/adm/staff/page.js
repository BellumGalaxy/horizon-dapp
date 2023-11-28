import { useContract } from "@thirdweb-dev/react";

const Staff = () => {
  function App() {
    const { contract, isLoading, error } = useContract("{{contract_address}}");
  }
  
  return (
    <div>
      <h1 className="text-7xl">Staff</h1>;
    </div>
  );
};
export default Staff;
