"use client";

import { useState } from "react";
import { Grid } from "@mui/material";
import { Chip } from "app/[lang]/components/chip";
import { DictionaryJSONType } from "app/[lang]/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowUpRightFromSquare,
  faCheck,
  faCircleCheck,
  faClock,
  faHeadphones,
  faPeopleGroup,
  faStar,
  faTicket,
} from "@fortawesome/free-solid-svg-icons";
import { SizeMe } from "react-sizeme";
import Image from "next/image";
import photo1_1 from "public/images/photo1.1.jpg";
import { url } from "inspector";
// import '{photo 1.1.jpg'} from 'app/[lang]/images';
interface readMore {
  list: string;
}
const readMoreList: readMore[] = [
  { list: "Live Guide" },
  { list: "1st, 2nd floors and summit access by elevator with your Eiffel Tower tickets" },
  { list: "Priority access to the Eiffel Tower with summit access" },
  { list: "Presentation (Available in English, Mandarin Chinese, Spanish and French)" },
  { list: "Unlimited time inside the Eiffel Tower" },
  { list: "Pick Up & Drop Off" },
  { list: "Tips" },
  { list: "Food and Drinks" },
];
export default function Card({ dictionary }: { dictionary: DictionaryJSONType }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [cardHeight, setCardHeight] = useState<number | null>(null);
  const handleToggle = () => {
    setIsFlipped(!isFlipped);
  };
  const photo1_1Url = "/images/photo1.1.jpg";
  return (
    <div className="perspective group" style={{ height: `${cardHeight}px` }}>
      <div className={`relative transition-transform duration-1000 transform preserve-3d ${isFlipped ? "my-rotate-y-180" : ""}`}>
        <SizeMe monitorHeight>
          {({ size }) => {
            // only if current size is greater than previous card height than update the height
            setCardHeight(size.height);
            return (
              <div className="absolute w-full lg:flex lg:max-w-full backface-hidden ">
                <div
                  className="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t shadow-md blur-6 spread-2 lg:h-auto lg:w-48 lg:rounded-tr-none lg:rounded-l"
                  style={{
                    backgroundImage:
                      //  `url(${photo1_1Url})`,
                      // `url('./images/photo1.1.jpg')`,
                      "url('https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?cs=srgb&dl=pexels-alex-azabache-3879071.jpg&fm=jpg')",
                  }}
                  title="Woman holding a mug"
                ></div>
                {/* <Image src={photo1_1} alt="Woman holding a mug" /> */}
                <div className="flex flex-col justify-between w-full p-4 pb-2 leading-normal bg-white border-b border-l border-r border-gray-300 rounded-b shadow-md blur-6 spread-2 lg:border-l-0 lg:border-t lg:border-gray-300 lg:rounded-b-none lg:rounded-r">
                  <div className="flex items-center justify-between w-full">
                    <p className="flex items-center text-sm text-gray-600">
                      <FontAwesomeIcon className="w-4 h-4 mr-2" size="lg" icon={faCircleCheck} />
                      {dictionary.card.available}
                    </p>
                    <div className="flex items-center leading-none">
                      <div>
                        <FontAwesomeIcon icon={faStar} className="w-4 h-4 mr-1 text-yellow-500" />
                      </div>
                      <div className="font-bold text-gray-800">{4.9}</div>&nbsp;
                      <div className="text-gray-800">/</div>&nbsp;
                      <div className="font-bold text-gray-800">5</div>&nbsp;
                      <div className="text-sm text-gray-600">(100)</div>
                    </div>
                  </div>
                  <div className="w-full my-3 border-t border-gray-300" />
                  <div className="mt-1 mb-2">
                    <Chip>{dictionary.card.guided_tour}</Chip>
                  </div>
                  <div className="mb-2 font-bold text-gray-900 text-md">{dictionary.card.title1}</div>

                  <div className="text-sm text-gray-600">
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" /> {dictionary.card.duration}: 1 - 3 hours (skip-the-line access)
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faHeadphones} className="w-4 h-4 mr-2" /> {dictionary.card.language}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-4 mr-2" /> {dictionary.card.tour_guide}
                    </div>
                    <div className="flex items-center">
                      <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-4 mr-2" /> {dictionary.card.priority}
                    </div>
                  </div>

                  <div className="mt-2">
                    <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500" onClick={handleToggle}>
                      Read More
                    </span>
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-2 border-t-2 border-gray-200">
                    <div>
                      <div className="text-xs text-gray-400">From</div>
                      <div className="text-lg font-bold text-gray-700">€109.90</div>
                    </div>
                    <button className="px-6 py-2 font-bold text-white transition-colors bg-blue-500 rounded shadow hover:bg-blue-600 active:bg-blue-500">
                      Book
                    </button>
                  </div>
                </div>
              </div>
            );
          }}
        </SizeMe>
        <div className="w-full p-3 rounded-t shadow-md h-72 lg:max-w-full backface-hidden my-rotate-y-180" style={{ height: `${cardHeight}px` }}>
          <div className="flex flex-col items-stretch h-full px-4">
            <div className="flex items-center gap-2 mt-3 text-blue-600">
              <FontAwesomeIcon icon={faArrowLeft} />
              <span className="text-blue-600 transition-colors cursor-pointer hover:text-blue-500" onClick={handleToggle}>
                Go back
              </span>
            </div>
            <Grid alignItems="center" container sx={{ height: "100%" }}>
              <p className="mt-2">
                This guided tour of the Eiffel Tower offers you an exceptional opportunity to explore this iconic landmark with the expertise of
                knowledgeable guides. With skip-the-line access, you'll bypass the queues and make the most of your time at this architectural
                masterpiece. Immerse yourself in the tower's history, admire breathtaking views of Paris, and create unforgettable memories on this
                unforgettable tour. Book your Eiffel Tower adventure with us today and embark on an experience that will leave you in awe of this
                timeless symbol of Paris.
              </p>

              <Grid item md={8} sx={{ height: "100%" }}>
                <div className="flex flex-col justify-center h-full py-2 text-sm">
                  {readMoreList.map((item: readMore, index: number) => (
                    <div key={index} className="flex mb-2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mt-1 mr-2" />
                      <p>{item.list}</p>
                    </div>
                  ))}
                  {/* {readMoreList.map((item: readMore, index: number) => (
                    <div key={index} className="flex mb-2">
                      <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mt-1 mr-2" />
                      <p>{item.list}</p>
                    </div>
                  ))} */}
                </div>
              </Grid>
              <Grid item md={4} sx={{ display: "grid", placeItems: "center", borderLeft: "1px solid #c4c4c4" }}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faTicket} size="3x" style={{ color: "#497adc" }} />
                  <div className="text-2xl font-bold text-gray-700">€109.90</div>
                  <div className="text-sm text-gray-500">Including fees</div>
                </div>
              </Grid>
            </Grid>
            <div className="flex justify-center ">
              <button className="px-6 py-2 font-bold text-white transition-colors bg-blue-500 rounded shadow hover:bg-blue-600 active:bg-blue-500">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
