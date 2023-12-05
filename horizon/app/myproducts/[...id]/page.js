"use client";
import MyCollapse from "@/app/components/Collapse";
import { AddRWA, AddTitle, PayInstallment, WinnerW } from "@/app/smartContract";
import TitlesSold from "@/app/smartContract/titlesSold";
import AddRWAFuji from "./AddRWAFuji";
import {
  useContract,
  useContractRead,
  ThirdwebProvider,
} from "@thirdweb-dev/react";
import Horizon_ABI from "../../contracts_abi/Horizon";
import { AvalancheFuji } from "@thirdweb-dev/chains";

const contractAddress = "0x8fEB780f9152303a53F4687D0da2d89743F30E15";

const InvestmentsManagement = ({ params }) => {
  const titleId = params.id[0];
  const contractId = params.id[1];

  const { abi } = Horizon_ABI;
  const { contract } = useContract(contractAddress, abi);
  const { data: titleSoldInfos, isLoading } = useContractRead(
    contract,
    "titleSoldInfos",
    [titleId, contractId]
  );

  const { data: allTittles } = useContractRead(contract, "allTitles", [
    titleId,
  ]);

  return (
    <main>
      <div className="space-y-3">
        <MyCollapse title="Pay Installment">
          <PayInstallment
            titleId={titleId}
            contractId={contractId}
            titleSoldInfos={titleSoldInfos}
            allTittles={allTittles}
          />
        </MyCollapse>

        <MyCollapse title="Add Title as Collateral">
          <AddTitle titleId={titleId} contractId={contractId} />
        </MyCollapse>

        <MyCollapse title="Create Permission">
          <AddRWA titleId={titleId} contractId={contractId} />
        </MyCollapse>

        <ThirdwebProvider activeChain={AvalancheFuji}>
          <MyCollapse title="Add RWA as Collateral">
            <AddRWAFuji
              titleId={titleId}
              contractId={contractId}
              titleSoldInfos={titleSoldInfos}
            />
          </MyCollapse>
        </ThirdwebProvider>

        <MyCollapse title="Withdraw Investment">
          <WinnerW titleId={titleId} contractId={contractId} />
        </MyCollapse>

        <MyCollapse title="More Infos">
          <TitlesSold titleId={titleId} contractId={contractId} />
        </MyCollapse>
      </div>
    </main>
  );
};
export default InvestmentsManagement;
