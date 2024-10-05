import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LandingPage = () => {
  return (
    <div>
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold ">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form action="">
        <Input />
        <Button>Shorten!</Button>
        {/* <img
          src="/landing.jpeg"
          alt="banner"
          className="w-full my-11 md:px-11"
        /> */}
      </form>
    </div>
  );
};

export default LandingPage;
