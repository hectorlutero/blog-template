import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="w-full border-b-[1px] border-slate-200">
        <div className="container mx-auto">
          <div className="flex justify-between items-center m-7">
            <div className="social-media flex space-x-4">
              <Link href="/" className="">
                Facebook
              </Link>
              <Link href="/" className="">
                Twitter
              </Link>
              <Link href="/" className="">
                Google+
              </Link>
              <Link href="/" className="">
                Instagram
              </Link>
            </div>
            <div className="blog-logo flex justify-content-center absolute left-1/2 -translate-x-1/2">
              <Link href="/" className="hover:underline">
                <Image
                  src={`/assets/general/logo.png`}
                  alt={`logo for `}
                  className=""
                  width={107}
                  height={31}
                />
              </Link>
            </div>
            <div className="navigation-tools flex space-x-4">
              <div className="hamburguer-menu">hamburguer</div>
              <div className="search-box-container">searchbox</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-b-[1px] border-slate-200">
        <div className="container mx-auto m-7">
          <div className="navigation-menu flex justify-center space-x-7">
            <Link href="/" className="">
              Home
            </Link>
            <Link href="/" className="">
              Lifestyle
            </Link>
            <Link href="/" className="">
              Fashion
            </Link>
            <Link href="/" className="">
              Technology
            </Link>
            <Link href="/" className="">
              Health
            </Link>
            <Link href="/" className="">
              Travel
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
