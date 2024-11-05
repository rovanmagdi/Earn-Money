import Footer from "@/components/custom/footer";
import Navbar from "@/components/custom/navbar";
import Achievements from "@/components/landingPage/achievements";
import Advertisers from "@/components/landingPage/advertisers";
import EasilyReceive from "@/components/landingPage/easilyReceive";
import Feedbacks from "@/components/landingPage/feedbacks";
import GetMoney from "@/components/landingPage/getMoney";
import Header from "@/components/landingPage/header";
import HowItWork from "@/components/landingPage/howItWork";
import LiveCashout from "@/components/landingPage/liveCashout";
import ManyWays from "@/components/landingPage/manyWays";

export default function Home() {
  return (
    <>
      <div className="bg-white text-black">
        <Navbar />

        <Header />
        <LiveCashout />
        <HowItWork />
        <EasilyReceive />
        <Achievements />
        <ManyWays />
        <Feedbacks />
        <GetMoney />
        <Advertisers />
        <Footer />
      </div>
    </>
  );
}
