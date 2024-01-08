import ContactForm from "@/components/contact/contactform";
import GithubCard from "@/components/contact/github";
import InstagramCard from "@/components/contact/instagram";
import LinkedinCard from "@/components/contact/linkedin";
import MastodonCard from "@/components/contact/mastodon";
import ResumeCard from "@/components/contact/resume";
import { title } from "@/components/primitives";
import { Tooltip } from "@nextui-org/react";

export default function ContactPage() {
  return (
      <div className="max-w-screen-sm flex flex-1 flex-col md:flex-row justify-center gap-6 md:gap-3">
       <ContactForm />
       <div className="hidden md:basis-1/5 md:flex md:flex-col md:gap-3">
        <div className="aspect-square">
          <LinkedinCard />
        </div>
        <div className="aspect-square">
          <GithubCard />
        </div>
        <div className="aspect-square">
          <ResumeCard />
        </div>
        <div className="aspect-square">
          <InstagramCard />
        </div>
       </div>
       <div className="flex flex-col justify-center gap-3">
          <div className="flex items-center justify-center gap-3 md:hidden">
            <LinkedinCard />
            <GithubCard />
          </div>
          <div className="flex items-center justify-center gap-3 md:hidden">
            <ResumeCard />
            <MastodonCard />
          </div>
        </div>
      </div>
  );
}
