import HeroSlider, { Overlay, Slide } from "hero-slider";
import Wrapper from "./Slider/Wrapper";
import Title from "./Slider/Title";
import Subtitle from "./Slider/SubTitle";

const bogliasco =
  "https://i.pinimg.com/originals/47/33/29/473329429c3d113bf4435a35fe83507b.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <Wrapper>
          <Title>NFT STORE </Title>
          <Subtitle>Explore , Collect and sell NFTs</Subtitle>
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        // label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass,
        }}
      />

      <Slide
        shouldRenderMask
        // label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco,
        }}
      />

      <Slide
        shouldRenderMask
        // label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare,
        }}
      />

      <Slide
        shouldRenderMask
        // label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock,
        }}
      />

      {/* <MenuNav /> */}
    </HeroSlider>
  );
}
