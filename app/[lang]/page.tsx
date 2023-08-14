import { getDictionary } from "get-dictionary";
import { Locale } from "i18n-config";
import Header from "app/[lang]/components/header";
import Card from "app/[lang]/components/card";
import json from "dictionaries/en.json";
import { Container } from "app/[lang]/components/container";
import Image from "next/image";
import QuestionList from "./components/qna";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import Eiffel from "public/images/eiffel.png";
import Tab from "app/[lang]/components/tab";
import CarouselComponent from "./components/review-carousel";
import Photo10 from "public/images/photo1.10.jpg";

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
          <div className="flex justify-center w-full">
            <div className="grid w-full mt-10 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 sm:justify-center">
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
            </div>
          </div>
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
                If the ticket to the summit is sold out, getting up to the second floor is already magic...
                <br />
                We will make your journey unforgettable by incredible and hidden theories about Eiffel Tower...
              </div>
            </div>
          </div>
          <ParagraphSection />
          <div className="mt-24">
            <div className="grid w-full mt-10 sm:grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5 sm:justify-center">
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
              <Card dictionary={dictionary} />
            </div>
          </div>

          <div className="mt-20">
            <Tab />
            <div className="flex justify-center w-full my-2">
              <button className="px-20 py-2 text-xl font-bold text-blue-500 transition-all border border-blue-500 rounded lg:text-2xl hover:border-blue-600 hover:text-blue-600 active:border-blue-500 active:text-blue-500 hover:shadow-md hover:blur-6 hover:spread-2 active:shadow-none">
                Book Now
              </button>
            </div>
          </div>

          <div className="mt-24">
            <CarouselComponent />
          </div>

          <div className="flex flex-col items-start mt-20 lg:flex-row">
            <div className="flex justify-start w-full lg:w-1/2 ">
              <div className="lg:mr-16">
                <h2 className="text-4xl font-bold">General FAQs</h2>
                <div className="mt-2 text-gray-700 text-md">
                  Everything you need to know about our Eiffel Tower Paris travel guide. Can&apos;t find an answer?
                  <a
                    className="text-blue-500 hover:text-blue-700"
                    href="https://wa.me/+33768493677?text=Hello there! I would like to enquire about the Eiffel Tower tour."
                  >
                    &nbsp;Click here to contact us on Whatsapp <FontAwesomeIcon icon={faWhatsapp} size="xl" style={{ color: "#25D366" }} />
                  </a>
                </div>
                <div className="flex justify-center mt-8">
                  <div className="relative w-20 h-36 md:w-36 md:h-64 lg:w-64 lg:h-96">
                    <Image src={Eiffel} alt="Eiffel Tower" fill />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <QuestionList />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

const ParagraphSection = () => {
  return (
    <div className="mt-30">
      <div>
        <h2 className="pb-2 text-3xl font-bold text-center text-gray-900">Why choose MorningStar Eiffel Tower Tickets and Tours ?</h2>
      </div>
      <div className="mt-4">
        <div className="w-full lg:w-1/2">
          <p className="pt-8 pb-2 text-2xl font-bold text-gray-900 lg:pt-0">Expert Guides</p>
          <p className="mt-3 text-justify">
            Accompanied by passionate and knowledgeable guides, you'll gain deep insights into the Eiffel Tower's history, construction, and
            significance. Their engaging commentary will bring the tower's stories to life, making your experience both educational and entertaining.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="pt-10 pb-2 text-2xl font-bold text-gray-900 lg:pt-0">Skip-the-Line Access</p>
          <p className="mt-3 text-justify">
            Bypass the long queues and save precious time with skip-the-line access. This allows you to maximise your visit by spending more time
            enjoying the sights and less time waiting in line.
          </p>
        </div>
        <div className="flex flex-col items-center lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="pt-8 pb-2 text-2xl font-bold text-gray-900 lg:pt-0">Eiffel Tower Ascent</p>
            <p className="mt-3 text-justify">
              Ascend the Eiffel Tower's iconic iron lattice structure with your guide, discovering its hidden treasures along the way. As you make
              your way up to all levels – 1st level, 2nd level and the summit, the highest observation deck accessible to the public in the European
              Union, your guide will point out interesting architectural details and share fascinating anecdotes about Gustave Eiffel, the tower's
              creator.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            {/* <div className="w-full lg:w-1/2 flex justify-center items-center"> */}
            <div className="mt-3 lg:pl-10 width:50% height:50%">
              <Image width="100%" height={300} alt="tower" src={Photo10} />
            </div>
          </div>
        </div>
        <div className="flex flex-col-reverse items-center mt-20 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <p className="pt-10 pb-2 text-3xl font-bold text-gray-900 lg:pt-0">Panoramic Views from Eiffel tower</p>
            <p className="mt-3">
              Reach the tower's summit and be rewarded with breathtaking panoramic views of Paris. From this vantage point, you'll witness the beauty
              of the City of Lights, spotting famous landmarks such as the Louvre, Notre-Dame Cathedral, and the River Seine. Capture stunning
              photographs to cherish as lasting memories. Also, we provide tours at 8pm during summertime, so that you could both soak in the Parisian
              skyline in daytime and witness the city illuminated by golden hues after sunset.
            </p>
          </div>

          <div className="w-full lg:w-1/2 ">
            <div className="lg:pl-10">
              <Image width="100%" height={300} alt="tower" src={Photo10} />
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <p className="pt-10 pb-2 text-2xl font-bold text-gray-900 lg:pt-0">Historical Insights</p>
          <p className="mt-3 text-justify">
            Delve into the tower's rich history and learn about its role as an enduring symbol of Paris and French engineering prowess. Discover how
            it was initially met with controversy but eventually became an icon of the city, attracting millions of visitors each year.
          </p>
        </div>
      </div>
      <div className="flex justify-center w-full my-2">
        <button className="px-20 py-2 text-xl font-bold text-blue-500 transition-all border border-blue-500 rounded lg:text-2xl hover:border-blue-600 hover:text-blue-600 active:border-blue-500 active:text-blue-500 hover:shadow-md hover:blur-6 hover:spread-2 active:shadow-none">
          Book Now
        </button>
      </div>
    </div>
  );
};
