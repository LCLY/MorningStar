"use client";

import { useState } from "react";
import { Chip } from "app/[lang]/components/chip";
import { DictionaryJSONType } from "app/[lang]/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare, faCheck, faCircleCheck, faClock, faHeadphones, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";
interface readMore {
  list: string;
}
const readMoreList: readMore[] = [
  { list: "Priority access to the Eiffel Tower" },
  { list: "Elevator access to the Summit(top floor)" },
  { list: "Elevator access to the first and second floor" },
  { list: "Access to security check shortcuts" },
  { list: "Professional licensed English-speaking guide" },
];
export default function Card({ dictionary }: { dictionary: DictionaryJSONType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:flex lg:max-w-full">
      <div
        className="flex-none h-48 overflow-hidden text-center bg-center bg-cover rounded-t shadow-md blur-6 spread-2 lg:h-auto lg:w-48 lg:rounded-tr-none lg:rounded-l"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?cs=srgb&dl=pexels-alex-azabache-3879071.jpg&fm=jpg')",
        }}
        title="Woman holding a mug"
      ></div>
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
        <div className="mb-2 font-bold text-gray-900 text-md">{dictionary.card.title}</div>

        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="w-4 h-4 mr-2" /> {dictionary.card.duration}: 2h
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeadphones} className="w-4 h-4 mr-2" /> {dictionary.card.guide}
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPeopleGroup} className="w-4 h-4 mr-2" /> {dictionary.card.group}
          </div>
        </div>

        <div className="mt-2">
          <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500" onClick={handleToggle}>
            {isOpen ? "Read Less" : "Read More"}
          </span>
        </div>

        {isOpen && (
          <div className="px-4 py-2 mt-2 text-sm bg-gray-100">
            {readMoreList.map((item: readMore, index: number) => (
              <div key={index} className="flex mb-2">
                <FontAwesomeIcon icon={faCheck} className="w-4 h-4 mt-1 mr-2" />
                <p>{item.list}</p>
              </div>
            ))}
            <div className="mt-2">
              <span className="text-sm text-blue-600 transition-colors cursor-pointer hover:text-blue-500">
                {dictionary.card.read_description} <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3 mt-1 ml-1 mr-2" />
              </span>
            </div>
          </div>
        )}

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
}
