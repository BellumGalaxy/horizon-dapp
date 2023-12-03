"use client";
import AdministrationPoly from "./AdministrationPoly";
import AdministrationAvax from "./AdministrationAvax";
import MyCollapse from "../components/Collapse";
import TitlesListAdmin from "../smartContract/TitlesListAdmin";

const Administration = () => {

  return (
    <main>
      <div>
        <AdministrationPoly />
      </div>
      <div className="mt-3">
        <AdministrationAvax />
      </div>
      <div className="mt-3">
        <MyCollapse title="Click to see all the titles">
          <TitlesListAdmin />
        </MyCollapse>
      </div>
    </main>
  );
};
export default Administration;
