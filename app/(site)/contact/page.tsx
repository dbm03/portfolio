import ContactForm from "@/components/contact/ContactForm";
import GithubCard from "@/components/contact/GitHub";
import InstagramCard from "@/components/contact/Instagram";
import LinkedinCard from "@/components/contact/LinkedIn";
import ResumeCard from "@/components/contact/Resume";

export default function ContactPage() {
  return (
    <div className="max-w-screen-sm flex flex-1 flex-col md:flex-row justify-center gap-6 md:gap-3">
      <ContactForm />
      <div className="hidden md:basis-1/5 md:flex md:flex-col justify-between md:gap-3">
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
          <InstagramCard />
        </div>
      </div>
    </div>
  );
}
