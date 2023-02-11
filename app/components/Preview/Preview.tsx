import Image from "next/image";
import BackgroundPic1 from "../../../public/bg-1.jpg";
import BackgroundPic2 from "../../../public/bg-2.png";

const Preview: React.FC = () => {
 return (
  <div className="flex flex-col">
   <div className="flex flex-row flex-wrap">
    <Image
     className="w-[70%] max-md:w-[100%] "
     src={BackgroundPic1}
     width={1920}
     height={1080}
     alt="Background1"
    />
    <article className="flex w-[30%] whitespace-normal p-8 text-xl my-auto leading-[32px] lg:text-2xl lg:leading-[64px] xl:text-3xl xl:leading-[84px]  text-center max-md:w-[100%]">
     We wish to assure you, that Sushi Place will offer the best sushi dishes made from the highest
     quality products. Our aim is to serve fresh and delicious food to our customers.
    </article>
   </div>
   <div className="flex flex-row flex-wrap">
    <article className="flex mx-auto whitespace-normal text-center p-8 text-xl h-full my-auto w-[70%] leading-[32px] lg:text-2xl lg:leading-[64px]  xl:text-3xl xl:leading-[84px] ">
     Ever wanted to know more about Sushi? Sushi originated as a means of preserving fish by
     fermenting it in rice. Many people believe it is Japanese however, it was actually first seen
     in China in the 2nd Century AD. It wasn’t until the 8th century AD that it reached Japan.
     Originally this fermented rice was discarded and the fish was consumed, this became a great
     source of protein and the fish was full of Omega 3 oils.
    </article>
    <Image
     className="w-[30%] max-md:w-[100%] max-md:h-full"
     src={BackgroundPic2}
     width={1080}
     height={1080}
     alt="Background2"
    />
   </div>
  </div>
 );
};

export default Preview;
