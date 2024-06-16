/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button, RadioGroup } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import useScanInfo from "../../hooks/useScaninfo";
import { ReadStatus } from "../type";
import { useState } from "react";
import ScanDescription from "./ScanDiscrption";
type ScanInfoContent = {
  onSlideChange: (duration: ReadStatus) => void;
  handelStarCleanup: (duration: ReadStatus) => void;
};
const ScanInfoContent = ({
  onSlideChange,
  handelStarCleanup,
}: ScanInfoContent) => {
  const { scan } = useScanInfo();
  const [isDisabled, setIsDisabled] = useState(false);
  const { t } = useTranslation();
  const handleSliderChange = (value: string): void => {
    if (value === "4") {
      setOptionValue(value);
      onSlideChange(ReadStatus.notInUse);
    }
    if (value === "3") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Neglected);
    }
    if (value === "2") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Inactive);
    }
    if (value === "1") {
      setOptionValue(value);
      onSlideChange(ReadStatus.Active);
    }
  };
  const setButtonDisabled = (value: string) => {
    if (value === "4") {
      handelStarCleanup(ReadStatus.notInUse);
    }
    if (value === "1") {
      setOptionValue(value);
      handelStarCleanup(ReadStatus.Active);
    }
    setIsDisabled(true);
  };

  const [optionValue, setOptionValue] = useState("4");
  return (
    <>
      <div className="none max-sm:text-16 text-34  ms-3 me-3 flex-col font-Rubik mb-10 text-black text-center mt-10 w-full">
        <p> {t("scanPage.title")} </p>
      </div>
      <div className="flex w-full">
        <ScanDescription onClick={setButtonDisabled} />
      </div>
    </>
  );
};

export default ScanInfoContent;
