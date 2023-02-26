import Image from "next/image";
import Link from "next/link";
import HeroPost from "../hero-post";
import PostPreview from "../post-preview";

const HeroSection = ({ heroPost, secondaryPost, tertiaryPost }) => {
  console.log(secondaryPost, tertiaryPost);
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-12 grid-rows-2 gap-4">
          <div className="col-span-8 row-span-2">
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage}
              date={heroPost.date}
              author={heroPost.author}
              slug={heroPost.slug}
              excerpt={heroPost.excerpt}
            />
          </div>
          <div className="col-span-4 row-span-1">
            <PostPreview
              key={secondaryPost.slug}
              title={secondaryPost.title}
              coverImage={secondaryPost.coverImage}
              date={secondaryPost.date}
              author={secondaryPost.author}
              slug={secondaryPost.slug}
              excerpt={secondaryPost.excerpt}
            />
          </div>
          <div className="col-span-4 row-span-1">
            <PostPreview
              key={tertiaryPost.slug}
              title={tertiaryPost.title}
              coverImage={tertiaryPost.coverImage}
              date={tertiaryPost.date}
              author={tertiaryPost.author}
              slug={tertiaryPost.slug}
              excerpt={tertiaryPost.excerpt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
