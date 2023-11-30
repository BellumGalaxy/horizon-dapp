"use client";
import AllTitles from "../../smartContract/allTitles";

const TitleDetails = ({ params }) => {
  console.log(params.id);

  return (
    <main>
      <AllTitles titleId={params.id}/>
    </main>
  );
};
export default TitleDetails;
