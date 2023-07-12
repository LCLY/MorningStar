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
    ques: "Q: Are Eiffel Tower tickets available online?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: What are the type of tickets available for visiting the Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: How muchy is a ticket to Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: Are skip-the-line tickets available for Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: How much is a skip-the-line ticket to Eiffel Tower?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: Can i skip the line with guided tour ticket cost?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: How much is a ticket to Eiffel Tower second floor?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
  {
    ques: "Q: How much is a ticket to Eiffel Tower summit?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
  },
];

export default function QuestionList(): JSX.Element {
  const [isVisible, setIsVisible] = useState([]);
  const toggleQuestion = index => {
    if (isVisible.includes(index)) {
      setIsVisible(isVisible.filter(isVisible => isVisible !== index));
    } else {
      setIsVisible([...isVisible, index]);
    }
  };

  return (
    <div>
      <h1 className="pb-1 mt-2 ml-5 text-3xl font-bold text-gray-900">Frequently Asked Questions About Eiffel Tower Tickets</h1>
      {questionLists.map((item: QuestionLists, index: number) => (
        <div key={index} className="p-2 m-2 border-b border-gray-300">
          <div className="flex justify-between m-2">
            <h2 className="text-xl font-semibold">{item.ques}</h2>
            <button className="text-gray-500 hover:text-gray-900" onClick={() => toggleQuestion(index)}>
              <FontAwesomeIcon className="w-4 h-4 mr-2" size="lg" icon={isVisible.includes(index) ? faChevronDown : faChevronUp} />
            </button>
          </div>
          {isVisible.includes(index) && (
            <div className="p-1 m-2 text-base">
              <p>{item.ans}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
