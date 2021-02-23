import Head from "next/head";
// import styles from "../styles/Home.module.css";
import Image from "next/image";
import HubspotForms from "./HubspotForms";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

export default function Home() {
  return (
    <div className="container min-w-full border-gray-600 border-2 bg-boomrng-bg-full">
      <Head>
        <title>Boomrng - Greeting Cards and Event Invitations App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container flex place-content-center">
        <Image
          src="/image/boomrng-NEW-Slogan_940x352-image.png"
          alt="Boomrng full logo"
          layout="intrinsic"
          width={940}
          height={352}
        />
      </div>
      <div
        className=" min-w-full"
        // style={{
        //   backgroundImage: "url(" + "/image/boomrng-web-bg.png",
        // backgroundAttachment: "scroll",
        // marginLeft: "auto",
        // marginRight: "auto",
        // width: "100vw",
        // opacity: 0.2,
        // }}
      >
        <div className=" flex min-w-full xl:w-5/6 lg:w-11/12">
          <div className=" w-full">
            <Image
              className=" w-full"
              src="/image/gui_1.png"
              alt="Interface homepage"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
            {/* <div className=""></div> */}
          </div>
          <div className=" relative px-6 my-48 py-12 rounded-2xl border-transparent shadow-xl bg-opacity-5 align-middle w-5/12 -ml-80 mr-36 text text-lg md:text-base md:text-left bg-yellow-100">
            <h2 className="text-3xl md:text-xl pb-1 text-center text-gray-800">
              ReInnovating
            </h2>
            <p className="text-justified text-gray-600 p-5 ">
              boomrng is reinventing the time-consuming task of finding the
              right greeting card or invitation. Why go from store to store
              anymore painstakingly trying to find the right card and gift for
              that special someone?
              <br />
              We offer designer cards from artists that can be customized with
              your own message. Those that wish to give a more personal design
              may use our <span>Canva</span> integration to create your own
              unique card all from the comfort of your home! 
            </p>
          </div>
        </div>
        <div className=" flex min-w-full xl:w-5/6 lg:w-11/12">
          <div className=" relative w-5/12 -mr-80 ml-56 py-16 px-6 my-48 border-transparent shadow-xl text z-10 text-lg md:text-base bg-opacity-50 bg-red-100 rounded-xl">
            <h2 className="text-3xl md:text-xl pb-1 text-center text-gray-800">
              Returning
            </h2>
            <p className="text-justify text-gray-600 px-5 py-2">
              You also don't have to worry about standing in line to send off
              your card because <span>boomrng</span> will handle the printing
              and mailing for you. Your cards will arrive within the week in the
              continental U.S.!
            </p>
            <p className="text-justify text-gray-600 px-5 py-2">
              Not sure what to get that special someone? boomrng can help with
              that too.
            </p>
          </div>
          <div className=" w-full">
            <Image
              src="/image/gui_2.png"
              alt="Interface browsing"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
          </div>
        </div>
        <div className=" flex lg:flex-row md:flex-col min-w-full xl:w-5/6 lg:w-11/12">
          <div className=" w-full">
            <Image
              src="/image/gui_3.png"
              alt="Interface card"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
          </div>
          <div className=" relative lg:w-5/12 md:w-full lg:my-52 md:my-2 lg:mr-36 md:mx-12 md:p-6 lg:py-16 lg:px-6 md:px-1 lg:-ml-56 md:-ml-0 bg-opacity-50 shadow-xl text-lg md:text-base rounded-xl bg-blue-100">
            <h2 className="text-3xl md:text-xl pb-1 text-center text-gray-800">
              ReGifting
            </h2>
            <p className=" text-gray-600 text-justify p-5">
              How about an eGift Card to go along with your card that can be
              used at any retailer that accepts VISA Gift Cards online or in
              store.
              <br />
              You can complete your shopping all within the boomrng platform!
              <br />
              Get on our list to be the first to try boomrng!
            </p>
          </div>
        </div>
        <div className=" flex min-w-full xl:w-5/6 lg:w-11/12 place-content-center ">
          <div className=" flex w-2/3 px-3 ">
            <HubspotForms />
          </div>
        </div>
      </div>

      <footer className=" flex place-content-center p-1">
        <div className=" container flex flex-row pt-12 pb-16 place-content-center justify-around items-center">
          <div>
            <p className=" mx-auto text-blue-500">
              <a href="https://www.boomrng.us/privacy">
                <span className="hover:underline">Privacy & Security</span>
              </a>{" "}
              |
              <a href="https://www.boomrng.us/tos">
                {" "}
                <span className="hover:underline">Terms of Service</span>
              </a>{" "}
              |<a> Accessibility</a>
            </p>
            <a
              href="https://www.boomrng.us"
              target="_blank"
              rel="noopener noreferrer"
              className=" text-xs"
            >
              © 2021 boomrng, LLC. All Rights Reserved.
            </a>
          </div>
          <div className=" flex flex-row items-center justify-around">
            <a href="http://www.facebook.com/boomrngapp">
              <img
                src="/image/icon_facebook.png"
                alt="boomrng facebook"
                className=" w-16 h-16 opacity-80"
              />
            </a>
            <a href="http://www.instagram.com/boomrngapp">
              <img
                src="/image/icon_instagram.png"
                alt="boomrng instagram"
                className=" w-14 h-14 opacity-80"
              />
            </a>
            <a href="http://www.twitter.com/boomrngapp">
              <img
                src="/image/icon_twitter.png"
                alt="boomrng twitter"
                className=" w-14 h-14 opacity-80"
              />
            </a>
            <a href="http://www.pinterest.com/boomrngapp">
              <img
                src="/image/icon_pinterest.png"
                alt="boomrng pinterest"
                className=" w-14 h-14 opacity-80"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
