import ComingSoonCard from "@/components/cards/comingsooncard";
import MinimalComingSoonCard from "@/components/cards/mincomingsooncard";
import StripeCard from "@/components/cards/stripecard";
import { title } from "@/components/primitives";

export default function AboutPage() {
  return (
    <>
      <div className="col-span-4 h-48">
        <ComingSoonCard />
      </div>
      <div className="col-span-2 h-48">
        <MinimalComingSoonCard />
      </div>
      <div className="">
        <MinimalComingSoonCard />
      </div>
      <div className="">
        <MinimalComingSoonCard />
      </div>
    </>
  );
}
