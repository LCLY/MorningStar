"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";

interface QuestionLists {
  ques: string;
  ans: string;
}

const questionLists: QuestionLists[] = [
  {
    ques: "Are Eiffel Tower tickets available online?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "What are the type of tickets available for visiting the Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "How muchy is a ticket to Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Are skip-the-line tickets available for Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "How much is a skip-the-line ticket to Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Can i skip the line with guided tour ticket cost?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "How much is a ticket to Eiffel Tower second floor?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "How much is a ticket to Eiffel Tower summit?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export default function QuestionList(): JSX.Element {
  const [isVisible, setIsVisible] = useState<number[]>([]);
  const toggleQuestion = (index: number) => {
    if (isVisible.includes(index)) {
      setIsVisible(isVisible.filter(isVisible => isVisible !== index));
    } else {
      setIsVisible([...isVisible, index]);
    }
  };

  return (
    <div>
      {/* <h1 className="pb-1 mt-2 ml-5 text-2xl font-bold text-gray-900">Frequently Asked Questions About Eiffel Tower Tickets</h1> */}
      {questionLists.map((item: QuestionLists, index: number) => (
        <div key={index} className="p-2 m-0 lg:m-2 border-b border-gray-300 cursor-pointer" onClick={() => toggleQuestion(index)}>
          <div className="flex justify-between mx-0 my-2 lg:m-2">
            <h2 className="text-lg font-semibold">{item.ques}</h2>
            <button className="text-gray-500 hover:text-gray-900">
              <FontAwesomeIcon
                className={`w-4 h-4 mr-2 duration-200 rotate-${isVisible.includes(index) ? 180 : 0} transition-transform`}
                size="lg"
                icon={/* isVisible.includes(index) ? faChevronDown : */ faChevronUp}
              />
            </button>
          </div>
          {/* {isVisible.includes(index) && ( */}
          <div
            className={`lg:pl-2 collapsible-content overflow-hidden transition-all duration-300 ${
              isVisible.includes(index) ? "scale-y-100" : "scale-y-0"
            } ${isVisible.includes(index) ? "max-h-[1000px]" : "max-h-[0]"}`}
          >
            <p>{item.ans}</p>
          </div>
          {/* )} */}
        </div>
      ))}
    </div>
  );
}
