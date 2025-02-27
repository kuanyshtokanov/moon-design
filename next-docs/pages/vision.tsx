import { ReactNode, useCallback, useEffect, useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import VisionLayout from '../components/VisionLayout';
import testimonial_1 from '../public/testimonial_1.png';
import testimonial_2 from '../public/testimonial_2.png';
import testimonial_3 from '../public/testimonial_3.png';
import vision_front_card_header_text_1 from '../public/vision_front_card_header_text_1.png';
import vision_front_card_header_text_2 from '../public/vision_front_card_header_text_2.png';
import vision_front_card_header_text_3 from '../public/vision_front_card_header_text_3.png';

const useMediaQuery = () => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1536px)');
    media.addEventListener('change', updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

const Header = () => (
  <>
    <h1 className="text-6xl text-white tracking-tight font-semibold max-w-sm">
      Build the best products faster.
    </h1>
  </>
);

const Mission = () => (
  <div className="text-white mt-10 mb-10 2xl:mb-72 max-w-lg">
    <h6 className="text-xs 2xl:text-base tracking-[0.50em] mb-2 max-w-sm">
      M I S S I O N
    </h6>
    <p className="2xl:text-xl leading-7 2xl:leading-normal">
      Create a tool that will reduce the time spent on routine and provide an
      opportunity for inspiration and innovation
    </p>
  </div>
);

interface CardFrontProps {
  headerImage: string | StaticImageData;
  altHeaderImage: string;
  subtext: string;
  innerCardText: string;
  name: string;
  company: string;
  userImage: string | StaticImageData;
}

const CardFront: React.FC<CardFrontProps> = ({
  headerImage,
  altHeaderImage,
  subtext,
  innerCardText,
  name,
  company,
  userImage,
}) => {
  return (
    <div className="vision-card-front text-white h-full w-full rounded-2xl mb-10 2xl:mb-20 2xl:w-auto absolute 2xl:static flex flex-col justify-between">
      <div className="mx-93 mt-14 mx-auto flex flex-col w-fit pt-4">
        <Image className="rounded-lg" src={headerImage} alt={altHeaderImage} />
      </div>
      <p className="ml-auto mr-10 text-right w-8/12 text-base h-1/5 h-fit opacity-50">
        {subtext}
      </p>
      <div className="rounded-2xl vision-card-front-inner-card mt-8 mb-2 mx-2 py-9 px-8 flex flex-col justify-end">
        <p className="text-[2rem] leading-10">{innerCardText}</p>
        <div className="flex mt-9 gap-x-4 items-center">
          <Image className="rounded-lg" src={userImage} alt="Testimonial" />
          <div className="flex flex-col">
            <p className="text-2xl">{name}</p>
            <p className="opacity-50">{company}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CardBackProps {
  heading: string;
  subHeading: string;
  supportingTextItems: string[];
}

const CardBack: React.FC<CardBackProps> = ({
  heading,
  subHeading,
  supportingTextItems,
}) => {
  return (
    <div className="vision-card-back text-white h-fit rounded-2xl mb-10 2xl:mb-36 ml-4 md:mr-10 2xl:ml-44 2xl:w-7/12 py-20 2xl:block absolute 2xl:static">
      <h3 className="text-5xl mx-4">{heading}</h3>
      <p className="mt-6 mb-9 mx-4">{subHeading}</p>
      <div className="mx-4 opacity-50">
        <ul className="list-disc text-sm opacity-50 list-outside text-justify">
          {supportingTextItems.map((i, index) => (
            <li key={index} className="mb-4">
              {i}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

type CardProps = CardFrontProps & CardBackProps;

const Card: React.FC<CardProps> = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isMaxScreen = useMediaQuery();

  return (
    <div
      className={
        'vision-card 2xl:grid 2xl:grid-cols-2 md:mr-10 my-20 ' + // Space after my-20 is important
        (isFlipped && !isMaxScreen ? 'is-flipped' : '')
      }
      onClick={(e) => {
        setIsFlipped(!isFlipped);
      }}
    >
      <CardFront {...props} />
      <CardBack {...props} />
    </div>
  );
};

export default function PageVision() {
  return (
    <div className="vision-page 2xl:flex 2xl:flex-col">
      <Header />
      <Mission />
      <div className="vision-scene justify-start mx-auto">
        <Card
          headerImage={vision_front_card_header_text_1}
          altHeaderImage="Efficiency, not consistency"
          subtext="Consistency is a result of efficiency, not the other way around. When the system is intuitive and empowering to use, consistency becomes an automatic by-product of adoption. "
          innerCardText="A design system isn’t a project. It’s a product serving products."
          name="Nathan Curtis"
          company="EightShapes"
          userImage={testimonial_1}
          heading="Efficiency"
          subHeading="A Design System ensures maximum returns on time spent on code and design, with minimal wasted energy, in order to achieve the same results."
          supportingTextItems={[
            'It improves the approach, minimising time spent creating products from scratch so it can be better spent solving problems.',
            'It improves code through iteration, which is cheaper than writing quality code from scratch on demand.',
            'It eliminates the need to repeatedly communicate design decisions that are documented and implemented.',
            'It frees teams up from maintaining their own code, which is often duplicated.',
          ]}
        />

        <Card
          headerImage={vision_front_card_header_text_2}
          altHeaderImage="Dynamic capability + stability = agility"
          subtext="Agility needs two things. One is a dynamic capability, the ability to move fast—speed, nimbleness, responsiveness. And agility requires stability, a stable foundation—a platform, if you will—of things that don't change."
          innerCardText="The more decisions you put off, and the longer you delay them, the more expensive they become."
          name="Craig Villamor"
          company="Google Maps"
          userImage={testimonial_2}
          heading="Agility"
          subHeading="A Design System facilitates a product’s agility by preventing stagnation on topics already discussed, agreed upon, documented and implemented."
          supportingTextItems={[
            'It shares the design and coding workload evenly between all team members.',
            'It allows us to create prototypes, experiments and launch MVPs in less time. This makes sure elements like consistency and accessibility aren’t ignored in the initial product in order to meet launch times.',
          ]}
        />

        <Card
          headerImage={vision_front_card_header_text_3}
          altHeaderImage="Quality over quantity"
          subtext="Focus on the best solutions, quantity become as consolidation of Agility and Efficiency"
          innerCardText="Styles come and go. Good design is a language, not a style."
          name="Massimo Vignelli"
          company="Italian Designer"
          userImage={testimonial_3}
          heading="Quality"
          subHeading="A Design System provides a systematic approach to managing code quality and design decisions."
          supportingTextItems={[
            'Being in constant evolution through iterations means the quality of each component continues to improve over time, particularly in comparison to new components.',
            'The fact it is a modular, closed and versioned system reduces the risk of losses to both code and design.',
            'It’s easily isolated in order to assess its quality and measure its external integration.',
          ]}
        />
      </div>
    </div>
  );
}

PageVision.getLayout = function getLayout(page: ReactNode) {
  return <VisionLayout>{page}</VisionLayout>;
};
