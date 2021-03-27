import Link from 'next/link';


export default function SimpleFooter () {
    return (
        <div className=" container flex flex-row pt-12 pb-16 place-content-center justify-around items-center">
        <div>
          <p className=" mx-auto text-blue-500">
            <Link href="/PrivacyAndSecurity">
                <a ><span className="hover:underline">Privacy & Security</span>
            </a></Link>{" "}
            |
            <Link href="/TermsOfService">
            <a ><span className="hover:underline"> Terms of Service</span>
              {" "}
            </a></Link>{" "}
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

    )
}