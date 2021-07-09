import ResidentInfo from "./ResidentInfo";

const ResidentsContainer = ({ residents }) => {
  return (
    <>
      {residents.map((res, index) =>
        index < 10 ? <ResidentInfo resUrl={res} /> : false
      )}
    </>
  );
};

export default ResidentsContainer;
