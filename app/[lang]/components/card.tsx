"use client";

import { useState } from "react";
import { Chip } from "app/[lang]/components/chip";
import { DictionaryJSONType } from "app/[lang]/page";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faClock, faHeadphones, faPeopleGroup, faStar } from "@fortawesome/free-solid-svg-icons";

export default function Card({ dictionary }: { dictionary: DictionaryJSONType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full lg:flex lg:max-w-full">
      <div
        className="shadow-md blur-6 spread-2 h-48 lg:h-auto lg:w-48 flex-none bg-cover bg-center rounded-t lg:rounded-tr-none lg:rounded-l text-center overflow-hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3879071/pexels-photo-3879071.jpeg?cs=srgb&dl=pexels-alex-azabache-3879071.jpg&fm=jpg')",
        }}
        title="Woman holding a mug"
      ></div>
      <div className="shadow-md blur-6 spread-2 border-r border-b border-l border-gray-300 lg:border-l-0 lg:border-t lg:border-gray-300 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pb-2 flex flex-col justify-between leading-normal w-full">
        <div className="flex justify-between items-center w-full">
          <p className="text-sm text-gray-600 flex items-center">
            <FontAwesomeIcon className="h-4 w-4 mr-2" size="lg" icon={faCircleCheck} />
            {dictionary.card.available}
          </p>
          <div className="flex items-center leading-none">
            <div>
              <FontAwesomeIcon icon={faStar} className="h-4 w-4 text-yellow-500 mr-1" />
            </div>
            <div className="text-gray-800 font-bold">{4.9}</div>&nbsp;
            <div className="text-gray-800">/</div>&nbsp;
            <div className="text-gray-800 font-bold">5</div>&nbsp;
            <div className="text-gray-600 text-sm">(100)</div>
          </div>
        </div>
        <div className="border-t border-gray-300 w-full my-3" />
        <div className="mt-1 mb-2">
          <Chip>{dictionary.card.guided_tour}</Chip>
        </div>
        <div className="text-gray-900 font-bold text-md mb-2">{dictionary.card.title}</div>

        <div className="text-sm text-gray-600">
          <div className="flex items-center">
            <FontAwesomeIcon icon={faClock} className="h-4 w-4 mr-2" /> {dictionary.card.duration}: 2h
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faHeadphones} className="h-4 w-4 mr-2" /> {dictionary.card.guide}
          </div>
          <div className="flex items-center">
            <FontAwesomeIcon icon={faPeopleGroup} className="h-4 w-4 mr-2" /> {dictionary.card.group}
          </div>
        </div>

        <div className="mt-2">
          <span className="cursor-pointer text-blue-600 hover:text-blue-500 transition-colors text-sm" onClick={handleToggle}>
            {isOpen ? "Read Less" : "Read More"}
          </span>
        </div>

        <div className="flex items-center justify-between border-t-2 border-gray-200 mt-2 pt-2">
          <div>
            <div className="text-xs text-gray-400">From</div>
            <div className="text-lg text-gray-700 font-bold">€109.90</div>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 active:bg-blue-500 text-white font-bold py-2 px-6 rounded shadow transition-colors">
            Book
          </button>{" "}
        </div>
      </div>

      {isOpen && (
        <div className="bg-gray-100 px-4 py-2 mt-2">
          <p>Collapsible Content</p>
        </div>
      )}
    </div>
  );
}
