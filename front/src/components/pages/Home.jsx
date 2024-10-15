import FirstSection from "./home/FirstSection";
import SecondSection from "./home/SecondSection";
import ThirdSection from "./home/ThirdSection";

function Home() {
  return (
    <main className=" flex flex-col pt-[165px]">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
    </main>
  );
}

export default Home;
