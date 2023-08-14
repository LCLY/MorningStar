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
    ques: "How long has the Eiffel Tower been in existence?",
    ans: "The Eiffel Tower has stood as an iconic and unique representation of Paris and France for 136 years. Constructed for the 1889 World's Fair, it immediately captured global admiration with its impressive height and bold architectural concept, embodying both French expertise and industrial brilliance.",
  },
  {
    ques: " Where is the Eiffel Tower situated in Paris?",
    ans: "The Eiffel Tower is situated on the Champs de Mars at 5 Avenue Anatole France in the 7th arrondissement of Paris. The emblematic monument situated at the center of Paris is discernible from afar and easily recognizable.",
  },
  {
    ques: "How can I reach the Eiffel Tower by public transport?",
    ans: `You may take one of these options:\n
    a. Metro Line 6 to Bir-Hakeim.\n
    b. RER Line C to Champ de Mars - Tour Eiffel.\n
    c. Bus Line 82 to Tour Eiffel bus stop.\n
    d. Boat along the Seine River.`,
  },
  {
    ques: "What is the Eiffel tower made of?",
    ans: "It may surprise or even shock you, that the Eiffel Tower is not made of steel but of iron. It is a kind of pure iron which we call puddle iron. It came from the Pompey forges (East of France). After the puddling process, the iron plates and beams were prefabricated using rivets at the Eiffel factories in Levallois-Perret.",
  },
  {
    ques: "Who is the designer and the builder of the Eiffel Tower?",
    ans: "The Eiffel Tower was constructed under the guidance of French engineer Gustave Eiffel, whose company was renowned for crafting metal frameworks and structures. Assisting Eiffel faithfully was Maurice Koechlin, his trusted associate, who meticulously handled the design (5,300 drawings!) and countless calculations for the monument. Additionally, Koechlin closely supervised its foundation and construction throughout the construction period between 1887 and 1889.",
  },
  {
    ques: "What makes the Eiffel Tower famous and iconic until today?",
    ans: "Over the course of 130 years, the Eiffel Tower has served as a potent and unmistakable emblem of Paris and, by association, France. Initially constructed for the 1889 World's Fair, the tower left an awe-inspiring impact on the global audience, capturing admiration with its grandeur and audacious design. It stood as a true representation of French expertise and industrial brilliance.",
  },
  {
    ques: "How many steps to reach the top of the Eiffel Tower?",
    ans: "The Tower has actually a total of 1,665 steps from the ground to the top. The bad news (or maybe a good one for you) is that you can only climb 674 of them, from the ground to the second floor (327, then 347 steps). You cannot take the stairs all the way to the top from the second floor, as this section is not open to the public for safety reasons.",
  },
  {
    ques: "What was the original purpose of the Eiffel Tower?",
    ans: "The Eiffel Tower was originally intended to be a prominent attraction at the 1889 Paris World's Fair. During that event, the entire Champ de Mars in Paris was dedicated to the World's Fair, emphasizing the remarkable progress of the era's great industrial advancements, particularly in iron and steel constructions.",
  },
  {
    ques: "Why is the Eiffel Tower a popular tourist attraction?",
    ans: "The Eiffel Tower is a favored destination for tourists due to its widespread appeal. Visitors come to capture photographs with its iconic facade, relish the breathtaking views from the observation decks, and witness the spectacular nightly light shows. Additionally, the tower holds special significance as the centerpiece for significant events like Paris' Bastille Day and New Year's fireworks celebrations, further contributing to its popularity among tourists.",
  },
  {
    ques: "How long should I spend visiting the Eiffel Tower?",
    ans: "We recommend you make the most of your visit by taking your time! It's recommended to allocate at least one and half hours for exploring the first and second floors and around two and half hours for a comprehensive visit to the summit.",
  },
  {
    ques: "Is it better to go up the Eiffel Tower day or night?",
    ans: "We recommend you to come after visiting the other attractions in Paris (most probably after 5 PM), or even in the evening to avoid crowds. This is the most comfortable moment to enjoy and indulge in the memorable atmosphere there. You can get skip-the-line access with your guided Eiffel Tower tours at the Eiffel Tower.",
  },
  {
    ques: "Is it worth going to the summit of the Eiffel Tower?",
    ans: "Absolutely! You should never miss this golden opportunity to go there if you can find the tickets, since it is always sold out as fast as lightning! The views of Paris from that height after ascending the tower on a glass elevator are unparalleled. If you go to the summit in the day, we recommend spending around 2 hours at the tower and consider eating a meal there",
  },
  {
    ques: "If I couldn't find a ticket for the summit, is it worth going to the second floor of the Eiffel Tower",
    ans: "Undoubtedly you will miss the best view from the summit, but you will still enjoy clear views of all of the French capital's monuments: the Louvre, Grand Palais, the bends in the Seine, Montmartre, Invalides, Notre Dame, etc. A compensation that you may give to yourself is to treat your taste buds with our Michelin-starred restaurant, the Jules Verne.",
  },
  {
    ques: "Is there a light show at the Eiffel Tower?",
    ans: "Yes, there is a light show at the Eiffel Tower. The tower is illuminated with thousands of sparkling lights every evening, creating a dazzling display of twinkling lights against the Parisian skyline. The light show usually takes place for about ten minutes at the beginning of each hour after sunset until 1 AM. This mesmerizing light display adds to the charm and allure of the Eiffel Tower, making it an even more magical sight to behold, especially during the evening hours.",
  },
  {
    ques: "Can we go up the Eiffel Tower without booking?",
    ans: "Access to the Eiffel Tower requires a ticket or reservation. You typically need to purchase a ticket in advance to enter the monument. There are different types of tickets available, depending on which floors you want to explore (1st and 2nd floors or all the way to the top) and whether you prefer to take the elevator or climb the stairs.",
  },
  {
    ques: "Do you need tickets for the first floor of the Eiffel Tower?",
    ans: "Yes. As long as you want to go up the tower, you always need a ticket to any floor. You can buy skip the line tickets to get to the first floor of the Eiffel Tower, which automatically include an access to the second floor. For the summit, you need to book an extra ticket. You truly recommend you to book in advance, only a few tickets for the summit are available. You can book your tickets here.",
  },
  {
    ques: "How many people can reach the summit of the Eiffel Tower?",
    ans: "The Eiffel Tower offers various elevators and stairways to facilitate access to different levels. Nevertheless, it's crucial to be aware that safety measures and regulations may dictate varying capacities, leading to limitations in certain areas. The summit, located on the 3rd floor, occupies a relatively compact space, allowing approximately 400 people to be accommodated at any given time.",
  },
  {
    ques: "How many visitors are allowed to enter the Eiffel tower per day?",
    ans: "The daily visitor capacity at the Eiffel Tower can fluctuate based on several factors, including the time of year, the day of the week, and any specific rules or limitations in effect. On average, during the peak tourist season, the Eiffel Tower usually accommodates approximately 25,000 to 30,000 visitors per day.",
  },
  {
    ques: "Can I bring my dog or cat into the Eiffel Tower?",
    ans: "Except for guide dogs assisting visually impaired individuals, pets, including dogs and cats, are not permitted inside the Eiffel Tower. Thus, you would be unable to bring your dog or cat into the tower itself. However, you are welcome to have your dog with you in the outdoor areas and the surrounding grounds of the Eiffel Tower.",
  },
  {
    ques: "Is the Eiffel Tower a good spot for Instagram?",
    ans: "Indeed, the Eiffel Tower is a widely recognized and beloved landmark, frequently sought after as a prime location for striking Instagram pictures. Its unique design and magnificent vistas of Paris render it an aesthetically captivating setting for capturing cherished memories. Numerous visitors and influencers opt to take photographs in its vicinity or pose in front of the tower, eager to share these moments on social media platforms like Instagram. Given its popularity, it's advisable to consider the potential crowds and, if possible, plan your visit during less busy periods. Exploring different angles and perspectives can also enhance the distinctiveness of your photos. For an exceptional experience, we recommend selecting the evening tour, which offers an enchanting atmosphere and an opportunity to capture stunning shots of the illuminated Eiffel Tower.",
  },
  {
    ques: "Where are the best spots for instagram photos with the Eiffel Tower?",
    ans: `The Eiffel Tower in Paris, France, is an iconic landmark that offers numerous great spots for Instagram photos. Here are some popular and picturesque locations for capturing the Eiffel Tower in your Instagram shots: \n
    1. Trocadéro Gardens: This is one of the most famous spots for photographing the Eiffel Tower. Located across the Seine River from the tower, the Trocadéro Gardens provide a fantastic view of the monument, especially from the central terrace. You can capture stunning images with the tower as the backdrop and the gardens in the foreground.\n
    2. Champ de Mars: As the large green space right in front of the Eiffel Tower, Champ de Mars offers plenty of opportunities for capturing unique photos. You can stroll along the lawns, find interesting perspectives, and experiment with different angles to create your perfect shot.\n
    3. Bir-Hakeim Bridge: This beautiful bridge offers a unique perspective of the Eiffel Tower. You can position yourself on the bridge to capture the tower in the background while highlighting the architectural details of the bridge itself. This location often provides stunning shots, especially during sunrise or sunset.\n
    4. Rue de l'Université: This narrow street located in the 7th arrondissement of Paris offers a captivating view of the Eiffel Tower between the buildings. The street provides a charming and less crowded location for capturing the tower from a different angle.\n
    5. Montmartre: Head to the charming neighborhood of Montmartre for a different perspective of the Eiffel Tower. From the steps of the Sacré-Cœur Basilica, you can capture panoramic shots of Paris with the Eiffel Tower in the distance. Additionally, wandering through the streets of Montmartre might lead you to unique vantage points for capturing the tower\n
    Remember to be respectful of the local laws and guidelines when taking photos and consider the privacy of others around you. Enjoy your time capturing the beauty of the Eiffel Tower for your Instagram feed!`,
  },
  {
    ques: "What should I bring when I go up to Eiffel Tower?",
    ans: `When visiting the Eiffel Tower, it's important to be prepared for your trip to ensure a comfortable and enjoyable experience. Here are some essential items to consider bringing:\n
    1. Tickets: Ensure you have your tickets ready for entry to the Eiffel Tower. You can either purchase them in advance or at the ticket offices located nearby. Double-check the entry times and any specific instructions related to your ticket.\n
    2. Valid ID: Carry a valid form of identification, such as a passport or ID card, as you may be required to show it when entering the Eiffel Tower.\n
    3. Comfortable Shoes: The Eiffel Tower is quite tall, and if you plan to explore different levels or climb the stairs, comfortable shoes are essential. Opt for sturdy and comfortable footwear to ensure a pleasant experience.\n
    4. Weather-appropriate Clothing: Check the weather forecast for the day of your visit and dress accordingly. Paris weather can vary, so bring appropriate clothing such as a light jacket, umbrella, or sunscreen, depending on the season and expected conditions.\n
    5. Water and Snacks: It's a good idea to bring a bottle of water and some snacks, especially if you plan to spend a significant amount of time exploring the Eiffel Tower. Having refreshments on hand will keep you hydrated and energized.\n
    6. Camera/Smartphone: Don't forget to bring a camera or smartphone to capture the memorable moments and the stunning views from the Eiffel Tower. You'll want to document your visit and share it on social media.\n
    7. Portable Charger: If you plan to use your smartphone or camera extensively, bring a portable charger to ensure that you don't run out of battery. This will enable you to capture photos throughout your visit.\n
    8. Small Backpack or Bag: A small backpack or bag will come in handy for carrying your essentials. Make sure it's lightweight and easy to carry, allowing you to have your hands free while exploring the tower.\n
    9. Map or Guidebook: Consider bringing a map or guidebook of Paris to help you navigate the city and learn more about the history and significance of the Eiffel Tower.\n
    Remember to check the Eiffel Tower's official website or contact the relevant authorities for any specific guidelines or restrictions that may be in place during your visit. Enjoy your time at the Eiffel Tower!`,
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
