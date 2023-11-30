"use client";
import AllTitles from "../../smartContract/allTitles";

const TitleDetails = ({ params }) => {

  return (
    <main>
      <AllTitles titleId={params.id}/>
    </main>
  );
};
export default TitleDetails;
