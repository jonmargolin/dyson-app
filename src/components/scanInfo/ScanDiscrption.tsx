import LightClean from "./LightClean";

const ScanDescription = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[45%] shadow-xl">
        <LightClean />
      </div>
      <div className="w-[45%] shadow-xl">
        <LightClean />{" "}
      </div>
    </div>
  );
};

export default ScanDescription;
