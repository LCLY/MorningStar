"use client";

import { Box, Tabs, Tab as MUITab, Typography } from "@mui/material";
import { useState } from "react";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
      {value === index && <Box sx={{ py: 3, pr: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Tab = () => {
  const [value, setValue] = useState(0);
  const [guideValue, setGuideValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleGuideChange = (event: React.SyntheticEvent, newValue: number) => {
    setGuideValue(newValue);
  };

  return (
    <>
      <div>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <p className="text-3xl font-bold text-gray-900 pb-2 pt-10 lg:pt-0">Description</p>

          <Tabs variant="scrollable" value={value} onChange={handleChange} aria-label="basic tabs example">
            <MUITab sx={{ fontWeight: "bolder" }} label="About" {...a11yProps(0)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="History" {...a11yProps(1)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Architecture" {...a11yProps(2)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Lights" {...a11yProps(3)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Trocadero Gardens" {...a11yProps(4)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Facts" {...a11yProps(5)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Views from the Eiffel" {...a11yProps(6)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Views of the Eiffel" {...a11yProps(7)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <p className="pt-2">About</p>
          <p className="pt-2">
            Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. commodo. Consectetur adipiscing elit, Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum
            arcu vitae elementum curabitur. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <p className="pt-2">History</p>
          <p className="pt-2">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi. Turpis tincidunt dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum
            curabitur. Ipsum dolor sit amet consectetur id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu
            facilisis sed odio morbi quis commodo. Hac habitasse platea adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam
            phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <p className="pt-2">Architecture</p>
          <p className="pt-2">
            Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit
            amet Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur
            adipiscing elit pellentesque habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at
            elementum eu facilisis sed odio morbi quis commodo.consectetur adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam
            phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <p className="pt-2">Lights</p>
          <p className="pt-2">
            Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque
            habitant morbi. Turpis tincidunt id aliquet risus feugiat in. sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum
            dolor sit amet consectetur adipiscing elit ut aliquam purus. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio
            morbi quis commodo. Hac habitasse platea dictumst quisque sagittis purus Eget magna fermentum iaculis eu non diam phasellus vestibulum
            lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={4}>
          <p className="pt-2">Trocadero Gardens</p>
          <p className="pt-2">
            Sed do eiusmod tempor platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum
            dolor sit amet consectetur incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque
            habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed
            odio morbi quis commodo. Hac habitasse adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam phasellus vestibulum
            lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={5}>
          <p className="pt-2">Facts</p>
          <p className="pt-2">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. Turpis tincidunt quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit amet
            consectetur id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis commodo.
            Hac habitasse platea dictumst adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={6}>
          <p className="pt-2">Views from the Eiffel</p>
          <p className="pt-2">
            Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Eget magna fermentum
            iaculis eu non diam phasellus vestibulum lorem. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus
            urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis commodo. Hac habitasse platea dictumst quisque sagittis
            purus sit amet volutpat.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={7}>
          <p className="pt-2">Views of the Eiffel</p>
          <p className="pt-2">
            Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus urna et
            pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis commodo. Hac habitasse platea dictumst quisque sagittis purus
            sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus.
            Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua.
          </p>
        </CustomTabPanel>
      </div>
      <div className="mt-10">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <p className="text-3xl font-bold text-gray-900 pb-2 pt-10 lg:pt-0">Comprehensive Guide to Visiting Eiffel Tower in Paris</p>

          <Tabs variant="scrollable" value={guideValue} onChange={handleGuideChange} aria-label="basic tabs example">
            <MUITab sx={{ fontWeight: "bolder" }} label="Plan Your Visit" {...a11yProps(0)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Timings" {...a11yProps(1)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Getting There" {...a11yProps(2)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Entrances" {...a11yProps(3)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Restaurants" {...a11yProps(4)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Tips" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={guideValue} index={0}>
          <p className="pt-2">Plan Your Visit</p>
          <p className="pt-2">
            Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. commodo. Consectetur adipiscing elit, Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum
            arcu vitae elementum curabitur. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non
            diam phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={1}>
          <p className="pt-2">Timings</p>
          <p className="pt-2">
            Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit
            pellentesque habitant morbi. Turpis tincidunt dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum
            curabitur. Ipsum dolor sit amet consectetur id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu
            facilisis sed odio morbi quis commodo. Hac habitasse platea adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam
            phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={2}>
          <p className="pt-2">Getting There</p>
          <p className="pt-2">
            Hac habitasse platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit
            amet Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur
            adipiscing elit pellentesque habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at
            elementum eu facilisis sed odio morbi quis commodo.consectetur adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam
            phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={3}>
          <p className="pt-2">Entrances</p>
          <p className="pt-2">
            Elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque
            habitant morbi. Turpis tincidunt id aliquet risus feugiat in. sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum
            dolor sit amet consectetur adipiscing elit ut aliquam purus. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio
            morbi quis commodo. Hac habitasse platea dictumst quisque sagittis purus Eget magna fermentum iaculis eu non diam phasellus vestibulum
            lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={4}>
          <p className="pt-2">Trocadero Gardens</p>
          <p className="pt-2">
            Sed do eiusmod tempor platea dictumst quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum
            dolor sit amet consectetur incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque
            habitant morbi. Turpis tincidunt id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed
            odio morbi quis commodo. Hac habitasse adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam phasellus vestibulum
            lorem.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={5}>
          <p className="pt-2">Tips</p>
          <p className="pt-2">
            Do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum dolor sit amet consectetur adipiscing elit pellentesque habitant
            morbi. Turpis tincidunt quisque sagittis purus sit amet volutpat. Malesuada bibendum arcu vitae elementum curabitur. Ipsum dolor sit amet
            consectetur id aliquet risus feugiat in. Tempus urna et pharetra pharetra. Molestie at elementum eu facilisis sed odio morbi quis commodo.
            Hac habitasse platea dictumst adipiscing elit ut aliquam purus. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem.
          </p>
        </CustomTabPanel>
      </div>
    </>
  );
};

export default Tab;
