import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import Header from "app/[lang]/components/header";
import Card from "app/[lang]/components/card";
import json from "dictionaries/en.json";
import { Container } from "app/[lang]/components/container";
import Image from "next/image";
import Page2QuestionList from "../components/page2qna";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Eiffel from "public/images/eiffel.png";
import Tab from "app/[lang]/components/tab";
import CarouselComponent from "../components/review-carousel";
import Photo28 from "public/images/photo2.8.jpg";

type FlattenJSON<T> = T extends object ? { [K in keyof T]: FlattenJSON<T[K]> } : string;

export type DictionaryJSONType = FlattenJSON<typeof json>;

export default async function IndexPage({ params: { lang } }: { params: { lang: Locale } }) {
  const dictionary = await getDictionary(lang);

  return (
    <div>
      <Header />
      <Container>
        <div className="lg:mx-10">
          <h1
            className="pb-3 text-2xl font-bold text-center text-gray-900 md:text-4xl"
            dangerouslySetInnerHTML={{ __html: dictionary.homepage.main_title }}
          ></h1>
          <h2 className="text-sm text-center text-gray-600 md:text-lg">{dictionary.homepage.main_subtitle}</h2>

          <div className="text-center text-gray-600 my-14">
            <div className="grid mb-10 text-xl gap-y-2 lg:text-2xl">
              <h2 dangerouslySetInnerHTML={{ __html: dictionary.homepage.miss_chance }}></h2>
              <h2>{dictionary.homepage.conquered}</h2>
              <div className="my-2">
                <button className="px-20 py-2 font-bold text-blue-500 transition-all border border-blue-500 rounded hover:border-blue-600 hover:text-blue-600 active:border-blue-500 active:text-blue-500 hover:shadow-md hover:blur-6 hover:spread-2 active:shadow-none">
                  Book Now
                </button>
              </div>
            </div>
            <div className="text-xl">
              <div className="mb-5">
                Why visit Eiffel Tower is a must for now
                <br />
                If you plan to get there An incredible view from the summit......
              </div>
              <div>
                <p className="text-justify">
                  Discover the enchantment of Paris as you embark on a captivating journey with our exceptional team. Step into the gateway of this
                  iconic monument and be prepared to be mesmerized with our knowledgeable, enthusiastic, passionate, and reliable guides. Uncover the
                  untold tales and hidden wonders of the Eiffel Tower as we weave incredible stories that will leave you spellbound.
                </p>
                <br />
                <p className="text-justify">
                  {" "}
                  Don't miss the opportunity to soar to the summit - book your adventure now. In the event that the summit is fully booked, secure
                  your tickets for an unforgettable tour of the second floor, a remarkable experience in its own right.
                </p>

                <br />
                <p className="text-justify">
                  Experience the grandeur of the Eiffel Tower, the world's most popular paid-for monument, attracting nearly 7 million visitors
                  annually, leading to high demand and swift ticket sales. Secure your spot by booking months in advance to ensure an unforgettable
                  visit to this remarkable landmark.
                </p>

                <br />
                <p className="text-justify">
                  {" "}
                  Embark on your journey with our team of expert guides who are fluent in six languages, including French, English, Mandarin Chinese,
                  Spanish, Bahasa Malaysia, and Korean, ensuring a seamless and immersive experience for all. To further enhance your convenience, our
                  dedicated customer support team is readily available to assist you through various channels such as WhatsApp, WeChat, email,
                  Instagram, and Facebook.
                </p>
              </div>
            </div>
          </div>
          <History />
          <ChampagneBar />
          <Facilities />
          <EssentialTips />

          <div className="flex flex-col items-start mt-20">
            <div className="flex justify-start w-full ">
              <div className="lg:mr-16">
                <h2 className="text-4xl font-bold">Frequently Asked Questions About Eiffel Tower Summit</h2>
                <div className="mt-2 text-gray-700 text-md">
                  Have questions about visiting the Eiffel Tower Second floor and Eiffel Tower Summit? Find answers to common queries below:
                  <a
                    className="text-blue-500 hover:text-blue-700"
                    href="https://wa.me/+33768493677?text=Hello there! I would like to enquire about the Eiffel Tower tour."
                  >
                    &nbsp;Click here to contact us on Whatsapp <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: "#25D366" }} />
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full ">
              <Page2QuestionList />
            </div>
          </div>
          <div className="mt-2 mb-4 text-gray-700 text-md">
            By referring to these frequently asked questions, you can gain valuable information about the Eiffel Tower Summit and the Eiffel Tower
            Second Floor. Plan your visit with us. Remember to utilize the elevator, savor the views, and explore the various attractions offered at
            the Summit or the Second floor.
          </div>
        </div>
      </Container>
    </div>
  );
}

const EssentialTips = () => {
  return (
    <div className="mt-30">
      <div>
        <h2 className="pb-2 text-3xl font-bold text-center text-gray-900">Essential Tips for Eiffel Tower Visitors</h2>
      </div>
      <div className="mt-4">When planning your visit to the Eiffel Tower, keep these helpful tips in mind to make the most of your experience:</div>
      <div className="mt-3 text-justify">
        1. Book Tickets a long time (months) in Advance: To avoid long queues and ensure a smooth entry, thanks to our tour guides, it is highly
        recommended to book your Eiffel Tower tickets online well in advance. During peak hours or popular seasons, ticket queues can exceed five
        hours and may be full, especially during olympic games. Secure your tickets BOOK NOW.
      </div>
      <div className="mt-3 text-justify">
        2. Summit Access: The only way to reach the summit of the Eiffel Tower is by taking the elevator from the second floor. Plan your visit
        accordingly and enjoy the breathtaking views from the top of the tower.
      </div>
      <div className="mt-3 text-justify">
        3. Telescopes for a Closer Look: Take advantage of the telescopes available at the summit to get a closer glimpse of important Parisian
        landmarks. Marvel at the detailed views and appreciate the beauty of the city's iconic landmarks from this unique vantage point.
      </div>
      <div className="mt-3 text-justify">
        By following these visitor tips, you can optimize your Eiffel Tower experience and ensure a memorable visit. Book in advance, travel light,
        enjoy summit access, appreciate the accessible design, explore through telescopes, and immerse yourself in the informative displays.
      </div>
      <div className="flex justify-center w-full my-2">
        <button className="px-20 py-2 text-xl font-bold text-blue-500 transition-all border border-blue-500 rounded lg:text-2xl hover:border-blue-600 hover:text-blue-600 active:border-blue-500 active:text-blue-500 hover:shadow-md hover:blur-6 hover:spread-2 active:shadow-none">
          Book Now
        </button>
      </div>
    </div>
  );
};

const Facilities = () => {
  return (
    <div className="mb-8 mt-30">
      <div>
        <h2 className="pb-2 text-3xl font-bold text-center text-gray-900">
          Exploring the Summit of the Eiffel Tower - Facilities to Enhance Your Visit
        </h2>
      </div>
      <div className="mt-4">
        When you reach the summit of the Eiffel Tower, you'll find a range of facilities that will enhance your experience and ensure your visit is
        comfortable and enjoyable. Here's what you can expect:
      </div>
      <div className="mt-3 text-justify">
        Culinary Delights at Food Stalls: Indulge in delectable snacks and treats available at the food stalls located on top of the tower. Savor
        mouth watering delicacies as you soak in the breathtaking views surrounding you. Treat your taste buds while immersing yourself in the magical
        atmosphere of the summit.
      </div>
      <div className="mt-3 text-justify">
        Convenience and Comfort: Rest assured that essential facilities are available to meet your needs. Find well-maintained toilets and convenient
        baby changing facilities to ensure a comfortable visit for visitors of all ages.
      </div>
      <div className="mt-3 text-justify">
        With these facilities at your disposal, your journey to the summit of the Eiffel Tower will be even more enjoyable and convenient. Treat
        yourself to delicious snacks, raise a glass at the Champagne Bar, shop for souvenirs, and make use of the necessary amenities, all while
        soaking in the unparalleled beauty of the summit.
      </div>
    </div>
  );
};

const ChampagneBar = () => {
  return (
    <div className="mb-8 mt-30">
      <div>
        <h2 className="pb-2 text-3xl font-bold text-center text-gray-900">Indulge in a Toast at the Romantic Champagne Bar</h2>
      </div>
      <Image width="100%" height={300} alt="tower" src={Photo28} />
      <div className="mt-4">
        Celebrate your unforgettable tour of the Eiffel Tower by raising a glass to its remarkable allure. Nestled atop this iconic landmark, the
        Champagne Bar beckons you to savor the moment while soaking in the awe-inspiring panoramic vistas of the city below.
      </div>
      <div className="mt-3 text-justify">
        At the Champagne Bar, you have the delightful option of choosing between rose or white champagne, both expertly chilled to perfection. Sip on
        your preferred glass of bubbly as you unwind and rejuvenate after a thrilling yet tiring exploration.
      </div>
      <div className="mt-3 text-justify">
        The Champagne Bar provides an idyllic setting to savor your drink, surrounded by the magnificent backdrop of the entire city. As you indulge
        in your libation, the sweeping views of Paris serve as the perfect company, creating a truly enchanting ambiance.
      </div>
      <div className="mt-3 text-justify">
        Raise a toast to the extraordinary journey you've embarked upon, and let the Champagne Bar elevate your experience to new heights.
      </div>
    </div>
  );
};
const History = () => {
  return (
    <div className="mb-8 mt-30">
      <div>
        <h2 className="pb-2 text-3xl font-bold text-center text-gray-900">Step into History: Gustave Eiffel's Office</h2>
      </div>
      <div className="mt-4">
        Immerse yourself in the past as you explore the meticulously restored office of renowned chief engineer, Gustave Eiffel. This remarkable space
        offers a captivating glimpse into the world of this visionary architect.
      </div>
      <div className="mt-3 text-justify">
        Experience the authenticity of Gustave Eiffel's office, painstakingly restored to its original condition. Marvel at the attention to detail as
        you encounter life-like wax models that vividly depict Gustave Eiffel and his daughter Claire. Witness a moment frozen in time as the figures
        portray the warm welcome extended to the legendary American inventor, Thomas Edison.
      </div>
      <div className="mt-3 text-justify">
        As you take in the ambiance of the office, your gaze will undoubtedly be drawn to a cherished artifact—a gramophone thoughtfully gifted to
        Gustave Eiffel by none other than Thomas Edison himself. This cherished memento serves as a testament to the friendship and mutual admiration
        between two giants of their respective fields.
      </div>
      <div className="mt-3 text-justify">
        Step into history and let your imagination transport you to an era of innovation and architectural marvels. The restored office of Gustave
        Eiffel is a treasure trove of fascinating insights into the life and accomplishments of this visionary engineer.
      </div>
    </div>
  );
};
