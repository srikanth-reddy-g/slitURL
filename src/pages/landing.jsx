import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState();
  const navigate = useNavigate();
  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };
  return (
    <div className="flex flex-col items-center min-h-screen justify-between">
      <div className="mt-36 mb-80">
        <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold ">
          The only URL Shortener <br /> you&rsquo;ll ever need! 👇
        </h2>
        <form
          onSubmit={handleShorten}
          className="sm:h-14 flex flex-col sm:flex-row w-full gap-2 px-4 md:px-0"
        >
          <Input
            type="url"
            value={longUrl}
            placeholder="Enter your long URL"
            onChange={(e) => setLongUrl(e.target.value)}
            className="h-full flex-1 py-4 px-4"
          />
          <Button className="h-full" type="submit" variant="destructive">
            Shorten!
          </Button>
        </form>
      </div>
      <Accordion
        type="multiple"
        collapsible="true"
        className="w-full md:px-11 mb-10"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>
            How does this slitURL URL shortener works?
          </AccordionTrigger>
          <AccordionContent>
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the orginal long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent>
            Yes. Creating an account allows you to manage your URLS, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent>
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
