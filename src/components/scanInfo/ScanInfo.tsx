import { useEffect } from "react";
import useInfoResults from "../../hooks/useGetInfoResults";
import InfoLoader from "./InfoLoader";
import ScanInfoContent from "./SacnInfoContent";
import { useScanDataContext } from "./scanContext";
import { ReadStatus } from "../type";

const ScanInfo = () => {
  const { res, isLoading } = useInfoResults();
  const { dispatch } = useScanDataContext();
  useEffect(() => {
    if (res) {
      dispatch({
        type: "UPDATE_DATA",
        payload: { data: res.data, totalEmailScan: res.totalEmailScan },
      });
    }
  }, [dispatch, res]);
  const setSliderDuration = (duration: ReadStatus): void => {
    dispatch({ type: "SET_SCAN_DURATION", payload: { duration } });
  };
  return (
    <div className="flex flex-col items-center ms-5 me-5 h-full">
      {isLoading ? (
        <InfoLoader />
      ) : (
        <ScanInfoContent onSlideChange={setSliderDuration} />
      )}
    </div>
  );
};

export default ScanInfo;
