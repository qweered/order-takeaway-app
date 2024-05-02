import { createLazyFileRoute } from "@tanstack/react-router";
import tw from "twin.macro";
import Trustpilot from "@/assets/icons/trustpilot.svg?react";
import hero from "@/assets/images/hero.png";
import { Button } from "@/components/Button.jsx";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

const HeroContainer = tw.div`flex items-center justify-center bg-[#F9F9F9] bg-opacity-85 mb-20`;

const HeroContent = tw.div`flex pl-24 pt-24`;

const HeroTextContainer = tw.div`flex flex-col mt-12`;

const HeroTitle = tw.h1`text-black text-6xl w-10/12`;

const HeroDescription = tw.p`mt-4 mb-6 text-gray-800 w-8/12`;

const StarContainer = tw.div`flex flex-col mb-2.5`;

const StarImageContainer = tw.div`mb-2`;

const StarRating = tw.p`text-base text-black font-normal leading-5`;

function Index() {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTextContainer>
          <HeroTitle>
            Beautiful food & takeaway,{" "}
            <span className="text-green">delivered</span> to your door.
          </HeroTitle>
          <HeroDescription>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500.
          </HeroDescription>
          <div className="mb-6">
            <Button>Place an order</Button>
          </div>
          <StarContainer>
            <StarImageContainer>
              <Trustpilot />
            </StarImageContainer>
            <StarRating>
              <span className="text-green">4.8 out of 5</span> based on 2000+
              reviews
            </StarRating>
          </StarContainer>
        </HeroTextContainer>
        <div>{<img src={hero} alt="Food Wallpaper" />}</div>
      </HeroContent>
    </HeroContainer>
  );
}
