import ContactForm from "@/components/contact/contactform";
import GithubCard from "@/components/contact/github";
import LinkedinCard from "@/components/contact/linkedin";
import { title } from "@/components/primitives";
import { Tooltip } from "@nextui-org/react";

export default function ContactPage() {
  return (
    <>
      <div className="col-span-3 row-span-3">
        <ContactForm />
      </div>
      <div className="hidden col-start-6 md:block aspect-square">
        <LinkedinCard />
      </div>
      <div className="hidden col-start-7 md:block aspect-square">
        <GithubCard />
      </div>
      <div className="flex items-center justify-center gap-3 md:hidden">
        <LinkedinCard />
        <GithubCard />
      </div>
    </>
  );
}
