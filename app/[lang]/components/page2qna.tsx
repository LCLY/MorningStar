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
    ques: "How many steps are there to reach the Eiffel Tower's Summit?",
    ans: "The stairway to the Summit is not accessible to the public. To reach the top, you can take the elevator located on the second floor of the tower.",
  },
  {
    ques: " What is the height of the Eiffel Tower Summit?",
    ans: "The Summit of the Eiffel Tower stands at an elevation of 276 meters above the ground.",
  },
  {
    ques: "Can I purchase skip-the-line tickets for the Eiffel Tower Summit?",
    ans: "Yes, our skip-the-line tickets are available for the Eiffel Tower Summit. You can conveniently book them here.",
  },
  {
    ques: "How can I reach the Eiffel Tower Summit?",
    ans: "Access to the Eiffel Tower Summit is only possible via the elevator located on the second floor. Please note that the stairway is not open to the public from the second floor to the top.",
  },
  {
    ques: "What dining options are available on the Eiffel Tower Summit?",
    ans: "The Eiffel Tower Summit is home to the Champagne Bar, where you can indulge in a glass of sparkling champagne while enjoying the splendid views of the city.",
  },
  {
    ques: "Can I sleep in the Eiffel Tower Summit?",
    ans: "The answer is sadly no. A few years ago for special occasions you could. Nowadays only a small nap on a site is permitted. Not everyone is Gustave Eiffel",
  },
  {
    ques: "How long can I stay inside the Eiffel Tower?",
    ans: "The Eiffel Tower offers flexible visiting hours without any restrictions. It is advisable to allocate ample time for your visit, especially during the late evening hours. Plan for approximately 1 hour and 30 minutes to explore the 2nd and 1st floors, and about 2 hours and 30 minutes for a complete journey to the top",
  },
  {
    ques: "What activities can I enjoy at the Eiffel Tower Summit?",
    ans: "On the Eiffel Tower Summit, you can soak in unobstructed panoramic views of the city, visit Gustave Eiffel's restored office, and explore fascinating exhibits such as panoramic maps and a model of the 1889 Summit. Additionally, you can browse through gift shops for souvenirs or savor delicious food while admiring the breathtaking scenery.",
  },
  {
    ques: "Should I take the stairs or the elevator to reach the Eiffel Tower Summit?",
    ans: "The stairway is not accessible to the public, so the elevator is the only option to reach the Eiffel Tower Summit. Make your way to the second floor and board the elevator to enjoy the journey to the top.",
  },
  {
    ques: "How many steps are there to reach the Eiffel Tower's second floor?",
    ans: "To reach the second floor of the Eiffel Tower, you will need to climb 674 steps. The tower itself has a total of 1,665 steps from the base to the top.",
  },
  {
    ques: "Can I purchase skip-the-line tickets to access the Eiffel Tower's second floor?",
    ans: "Yes, skip-the-line tickets are available for purchase here, granting you direct access to the second floor of the tower.",
  },
  {
    ques: "Is it possible to go to the summit from the Eiffel Tower's second floor?",
    ans: "Yes, if the ticket was booked in advance. You can upgrade your ticket to include access to the summit of the Eiffel Tower. Remember you cannot do it on site. If you have the proper ticket, once on the second floor, you take an elevator to reach the summit.",
  },
  {
    ques: "What dining options are available on the Eiffel Tower's second floor?",
    ans: "While on the second floor, you can enjoy a remarkable dining experience at Le Jules Verne, a Michelin-starred restaurant helmed by chef Alain Ducasse.",
  },
  {
    ques: "What activities can I do on the Eiffel Tower's second floor?",
    ans: "On the second floor, you can relish panoramic views of the captivating City of Lights from the renowned observation deck. Indulge in delightful desserts at the macaroon bar and treat yourself to an exquisite French meal at Le Jules Verne. Additionally, explore the various gift shops where you can purchase souvenirs.",
  },
  {
    ques: "Should I choose the stairs or the elevator to reach the Eiffel Tower's first floor?",
    ans: "We recommend taking the stairs to the second floor due to the typically long queue for the elevator, which can be up to 1-2 hours. The stairs not only provide breathtaking views of the city but also give you the freedom to ascend at your own pace. You can take breaks along the way to admire the stunning views of Paris. Keep in mind that climbing the stairs entails ascending 674 steps.",
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
        <div key={index} className="p-2 m-0 border-b border-gray-300 cursor-pointer lg:m-2" onClick={() => toggleQuestion(index)}>
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
            <p className="whitespace-pre-line custom-line-height">{item.ans}</p>
          </div>
          {/* )} */}
        </div>
      ))}
    </div>
  );
}
