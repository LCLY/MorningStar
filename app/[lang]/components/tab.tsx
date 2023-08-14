"use client";

import { Box, Tabs, Tab as MUITab, Typography } from "@mui/material";
import { useState } from "react";
import Photo12 from "public/images/photo1.12.jpg";
import Photo13 from "public/images/photo1.13.jpg";
import Photo14 from "public/images/photo1.14.jpg";
import Photo15 from "public/images/photo1.15.png";
import Image from "next/image";

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
            <MUITab sx={{ fontWeight: "bolder" }} label="About Eiffel Tower" {...a11yProps(3)} />
            {/* <MUITab sx={{ fontWeight: "bolder" }} label="Trocadero Gardens" {...a11yProps(4)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Facts" {...a11yProps(5)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Views from the Eiffel" {...a11yProps(6)} />
            <MUITab sx={{ fontWeight: "bolder" }} label="Views of the Eiffel" {...a11yProps(7)} /> */}
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <p className="pt-2 font-semibold">About</p>
          <div className="flex justify-center mt-2">
            <div className="relative w-52 h-48 md:w-96 md:h-80 lg:w-84 lg:h-96">
              <Image src={Photo12} alt="Eiffel Tower" fill />
            </div>
          </div>

          <p className="pt-2 text-justify">
            Rising proudly on the Champ de Mars in Paris, France, the Eiffel Tower is a remarkable wrought iron lattice structure. This iconic tower,
            named after its visionary engineer Gustave Eiffel, was originally built as the grand entrance arch for the 1889 World's Fair.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <p className="pt-2 font-semibold">History</p>
          <div className="flex justify-center mt-2">
            <div className="relative w-52 h-48 md:w-96 md:h-80 lg:w-84 lg:h-96">
              <Image src={Photo13} alt="Eiffel Tower" fill />
            </div>
          </div>
          <p className="pt-2 text-justify">
            The Eiffel Tower, one of the world's most popular paid attractions, holds the distinction of being one of the most recognizable and iconic
            structures globally. Towering at a height of 324 meters (1 083 ft), stands as the tallest iron edifice in Paris. Constructed from 1887 to
            1889 as part of the World Fair, the Eiffel Tower has become an inseparable symbol of the city and a must-visit destination for anyone
            exploring the City of Lights.
          </p>
          <div className="mt-2">
            <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500">Read More</span>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <p className="pt-2 font-semibold">Architecture</p>
          <div className="flex justify-center mt-2">
            <div className="relative w-52 h-48 md:w-96 md:h-80 lg:w-84 lg:h-96">
              <Image src={Photo14} alt="Eiffel Tower" fill />
            </div>
          </div>
          <p className="pt-2 text-justify">
            Reaching a height of 320 meters (1,050 ft), equivalent to that of an impressive 81-story building, the Eiffel Tower soared above all other
            man-made structures of its time. In fact, during its construction, it surpassed the renowned Chrysler Building in New York City by nearly
            200 feet (61 m), claiming the title of the world's tallest structure. Discover the captivating story and architectural marvels of this
            iconic masterpiece on this informative page.
          </p>
          <div className="mt-2">
            <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500">Read More</span>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={3}>
          <p className="pt-2 font-semibold">About Eiffel Tower</p>
          <div className="flex justify-center mt-2">
            <div className="relative w-52 h-48 md:w-96 md:h-80 lg:w-84 lg:h-96">
              <Image src={Photo15} alt="Eiffel Tower" fill />
            </div>
          </div>
          <p className="pt-2 text-justify">
            While the tower itself is divided into three levels, don't overlook the captivating attractions awaiting you at the Esplanade. Delve into
            the possibilities and discover how you can make the most of your time at this vibrant space.
          </p>
          <p className="pt-2 text-justify">
            Observe the Tower's Ornamental Frieze: Take a moment to appreciate the ornamental frieze that encircles the four pillars of the tower.
            Step back and you'll discover the names of the 72 engineers, scientists, and industrialists who played a crucial role in the creation of
            the Eiffel Tower, adding a fascinating historical touch to your visit.
          </p>
          <div className="mt-2">
            <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500">Read More</span>
          </div>
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
          <p className="pt-2 font-semibold">Plan Your Visit</p>
          <p className="pt-2 text-justify">When is the Ideal Time to Visit the Eiffel Tower?</p>
          <p className="pt-2 text-justify">
            As the most popular paid attraction worldwide, the Eiffel Tower draws a significant number of visitors daily. If you wish to avoid crowds
            during your visit, here are some key considerations.
          </p>
          <p className="pt-2 text-justify">
            Peak Periods: From late June to early September, the Eiffel Tower experiences the highest influx of visitors. Additionally, holiday
            seasons such as April to May and the Christmas season tend to be busy. It is advisable to steer clear of long weekends to minimize crowds.
          </p>
          <p className="pt-2 text-justify">
            Weekday vs. Weekend: To enjoy a less crowded experience, weekdays are preferable, particularly in the morning before 10:30 AM.
            Alternatively, visiting in the evening after 5 PM allows you to witness the mesmerizing light show. Keep in mind that weekends, especially
            during holidays and summer months, tend to be extremely crowded. Tuesdays, Wednesdays, and Thursdays generally have the lowest attendance.
          </p>
          <p className="pt-2 text-justify">
            Peak Season vs. Low Season: The optimal time of year to visit the Eiffel Tower is during the off-season, which spans from October to
            March. As Paris is a renowned tourist hub, we recommend avoiding the peak season from June to August.
          </p>
          <p className="pt-2 text-justify">
            By planning your visit strategically, you can make the most of your experience at the Eiffel Tower while minimizing crowds.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={1}>
          <p className="pt-2 font-semibold">Timings</p>
          <p className="pt-2 text-justify">
            Morning or Afternoon: Plan your visit during afternoon hours to avoid peak times. This is when the crowds tend to be smaller.
          </p>
          <p className="pt-2 text-justify">
            Thursdays: If you prefer an evening visit, Thursdays can be a good option. The Eiffel Tower remains open until midnight on Thursdays, and
            fewer people visit after 6 PM
          </p>
          <p className="pt-2 text-justify">
            By following these suggestions, you can increase your chances of enjoying a more peaceful and less crowded experience at the Eiffel Tower.
            Remember to check the official website for any updates on opening hours and potential closure
          </p>
          <p className="pt-2 text-justify">
            The estimated time needed to tour the first and second floors of the Eiffel Tower is around 1.5 hours. If you intend to visit the top of
            the tower, you should plan for a total visit duration of approximately 2.5 hours.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={2}>
          <p className="pt-2 font-semibold">Getting There</p>
          <p className="pt-2">It is really for you to reach the Eiffel Tower in Paris by public transport.</p>
          <ol className="list-decimal list-inside">
            You may take one of these options:
            <li>Metro Line 6 to Bir-Hakeim.</li>
            <li>RER Line C to Champ de Mars - Tour Eiffel.</li>
            <li>Bus Line 82 to Tour Eiffel bus stop.</li>
            <li>Boat along the Seine River.</li>
          </ol>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={3}>
          <p className="pt-2 font-semibold">Entrances</p>
          <p className="pt-2 text-justify">
            Your choice of entrance to the Eiffel Tower depends whether you prefer ascending to the second floor only or using the elevator to reach
            the top. For visitors without children and no specific health concerns, the South Entrance is recommended. To avoid crowds, it is
            advisable to head to the East entrance. We will meet at the meeting point nearby Eiffel Tower to avoid crowds, start the tour and with our
            skip-the-line tickets, you will save precious time.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={4}>
          <p className="pt-2 font-semibold">Madame Brasserie</p>
          <p className="pt-2 text-justify">
            Introducing Madame Brasserie, located on the First Floor, offering delectable Brasserie cuisine. The restaurant serves breakfast from 10
            AM to 12 PM, lunch from 12 PM to 1:30 PM, snacks from 3 PM to 6 PM, and dinner from 6:30 PM to 9 PM. The Bar remains open all day for your
            enjoyment.
          </p>
          <p className="pt-2 text-justify">
            Established on June 6, 2022, by Chef Thierry Marx, Madame Brasserie provides a wonderful opportunity to experience Parisian life. Indulge
            in the restaurant's contemporary dishes, carefully crafted with local and seasonal ingredients, while relishing the panoramic views of
            Seine, Trocadero, Bois de Boulogne forest, and distant Parisian skyscrapers.
          </p>
          <p className="pt-2 text-justify">
            For a more immersive Eiffel Tower experience, opt for a table in the tower's middle, granting you an up-close view of the inner workings
            of this iconic structure.
          </p>
          <p className="pt-2 font-semibold">Le Jules Vern</p>
          <p className="pt-2 text-justify">
            Experience the wonders of Le Jules Verne, a contemporary French gourmet restaurant situated on the Second Floor of the Eiffel Tower.
            Located 410 feet above the ground, this one-Michelin-starred establishment is helmed by the esteemed Frédéric Anton, a recipient of the
            prestigious Meilleur Ouvrier de France award, leading a team of exceptional chefs. The restaurant's operating hours are from 1:30 PM to 5
            PM, offering a delightful afternoon dining experience.
          </p>
          <p className="pt-2 text-justify">
            Marvel at breathtaking panoramic views of Paris while savoring your meal, or choose a seat at either L'Alcôve or Le Comptoir, where you
            can witness the inner workings and engineering marvels of the tower up close. Beyond its remarkable location, Le Jules Verne promises an
            unforgettable culinary journey, drawing inspiration from the iconic Iron Lady herself for each dish on the menu.
          </p>
          <p className="pt-2 text-justify">
            Whether you opt for lunch or dinner, this outstanding restaurant guarantees an exceptional time. However, be sure to make a reservation in
            advance, as walk-ins are not possible at this exclusive venue
          </p>
          <p className="pt-2 font-semibold">Champagne Bar</p>
          <p className="pt-2 text-justify">
            Elevate your Parisian experience at the Champagne Bar, located on the Top Floor of the Eiffel Tower. From 10:15 AM to 10:15 PM, revel in
            the breathtaking views of the City of Lights, sipping on a glass of either white champagne or G.H.Mumm rose champagne – a truly
            unforgettable moment at 905 feet above the ground.
          </p>
          <p className="pt-2 text-justify">
            For those seeking a lavish treat, indulge in a serving of caviar alongside your champagne selection. However, if you prefer non-alcoholic
            options, the Champagne Bar also caters to teetotalers, offering a delightful range of non-alcoholic beverages to complement your
            high-altitude experience.
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={guideValue} index={5}>
          <p className="pt-2 font-semibold">Tips</p>
          <p className="pt-2 text-justify">
            Consider visiting the Eiffel Tower during both day and night to enjoy the stunning views from the top. During the day, you can appreciate
            the city's beauty and have a picnic, while at night, witness the breathtaking sight of the tower lit up by 20,000 bulbs. Don't forget to
            climb down for amazing views and capture memorable photos.
          </p>
          <p className="pt-2 text-justify">
            Plan to spend around 2 to 3 hours exploring each floor, visiting the restaurants, and browsing the souvenir store. Avoid rushing through
            your visit and give yourself ample time to fully experience and appreciate all the highlights of the tower. Take the stairs to the second
            floor and then use the elevator to reach the top for breathtaking views.
          </p>
        </CustomTabPanel>
      </div>
    </>
  );
};

export default Tab;
