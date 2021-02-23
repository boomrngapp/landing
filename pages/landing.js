import Head from "next/head";
import styles from "../styles/Home.module.css";
import Image from "next/image";
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import HubspotForms from "./HubspotForms";

export default function Landing() {
  return (
    <div class="container mx-auto">
      <Head>
        <title>Boomrng</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <div class="">
          <h1 class="container">
            <Image
              src="/boomrng-NEW-Slogan_940x352-image.png"
              alt="Boomrng full logo"
              layout="intrinsic"
              width={940}
              height={352}
            />
          </h1>
        </div>
        <div class="w-full m-auto grid md:grid-cols-2 xl:w-3/4 lg:w-11/12 rounded-lg">
          <div class="hero min-h-full text-center w-full m-auto bg-opacity-90 rounded-lg bg-blue-100">
            <Image
              class="w-full m-auto rounded-lg shadow-lg"
              src="/gui_1.png"
              alt="Interface homepage"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
          </div>
          <div class="text m-auto text-lg md:text-left bg-yellow-100">
            <p class="">
              boomrng is reinventing the time consuming task of finding the
              right greeting card or invitation. Why go from store to store
              anymore just to find the right card and gift for that special
              someone?
              <br />
              We offer designer cards from artists that you can customize with
              your own message, or use our Canva integration to create your own
              unique card all from the comfort of your home! 
            </p>
          </div>
        </div>
        <div class="w-full m-auto grid md:grid-cols-2 xl:w-3/4 lg:w-11/12 rounded-lg">
          <div class="text m-auto text-lg md:text-left bg-yellow-100">
            <p>
              And, we handle the printing and mailing for you. Your cards will
              arrive within the week in the continental U.S.!
              <br />
              Not sure what to get that special someone? boomrng can help with
              that too.
            </p>
          </div>
          <div class="hero max-h-96 text-center w-full m-auto bg-opacity-90 rounded-lg bg-blue-100">
            <Image
              src="/gui_2.png"
              alt="Interface browsing"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
          </div>
        </div>
        <div>
          <div class="hero max-h-96 left-auto w-full bg-opacity-90 rounded-lg bg-blue-100">
            <Image
              src="/gui_3.png"
              alt="Interface card"
              layout="intrinsic"
              width={1852}
              height={1042}
            />
          </div>
          <div class='bg-yellow-100'>
            <p>
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

        <div class="w-5/6 m-auto">
          <HubspotForms />
        </div>
      </main>

      <footer className={styles.footer}>
        <p>
          <a>Privacy & Security</a> | <a>Terms of Service</a> |{" "}
          <a>Accessibility</a>
        </p>
        <a
          href="https://www.boomrng.us"
          target="_blank"
          rel="noopener noreferrer"
        >
          © 2021 boomrng, LLC. All Rights Reserved.{" "}
          <img src="/logo.svg" alt="boomrng Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
