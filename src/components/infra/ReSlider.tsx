import {
  SliderTrack,
  SliderFilledTrack,
  Tooltip,
  SliderThumb,
  Slider,
  defineStyle,
} from "@chakra-ui/react";
import { useState } from "react";
import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const sizes = {
  xl: definePartsStyle({
    container: defineStyle({
      w: "80%",
    }),
    track: defineStyle({
      h: 3,
    }),
    thumb: defineStyle({
      boxSize: 3,
    }),
  }),
};
export const sliderTheme = defineMultiStyleConfig({ sizes });
const ReSlider = () => {
  const [sliderValue, setSliderValue] = useState(5);
  const [showTooltip, setShowTooltip] = useState(false);
  return (
    <div className="flex w-full flex-col items-center">
      <Slider
        size="xl"
        id="slider"
        defaultValue={5}
        min={0}
        max={100}
        colorScheme="blue"
        onChange={(v) => setSliderValue(v)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        color={"blue"}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="blue.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
      <div className="flex w-9/12 justify-center bg-[url('/src/assets/TOOLTIP.svg')] bg-[length:100%_100%] bg-no-repeat mt-5 text-white p-5 rounded focus:outline-none focus:ring-4 focus:ring-purple-300 ">
        <p className="w-full">Delete {sliderValue}% of storage </p>
      </div>
    </div>
  );
};

export default ReSlider;
