import nahar from "./../../../assets/nahar.jpeg";

const TestCard = () => {
  return (
    <div className="flex flex-col border-2 border-indigo-200 ms-4 me-4 pt-2 rounded-[5%] ps-4 pb-4">
      <div className="w-[60px] ms-4">
        <img className="rounded-[50%]" src={nahar} />
      </div>
      <div className="capitalize text-24 text-black font-Rubik mb-1">
        jon Dow
      </div>
      <div className="text-16 text-black font-Rubik mb-1">
        Reclaim has to be my favorite email-cleansing service. maybe even my
        favorite organize app! I would be lost without it.
      </div>
    </div>
  );
};

export default TestCard;
