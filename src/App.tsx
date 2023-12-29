import Divider from "@components/common/Divider";

import Hero from "@components/sections/Hero";

import Features from "@components/sections/Features";

import Testinomials from "@components/sections/Testinomials";

import Footer from "@components/sections/Footer";
import "./App.css";

function App() {
  return (
    <main className="dark:bg-[#020303]">
      {/* navbar */}
      {/* hero */}
      <Hero />
      <Divider />
      {/* features */}
      <Features />
      {/* pricing and plans */}
      {/* testinomials */}
      <Testinomials />
      {/* footer */}
      <Footer />
    </main>
  );
}

export default App;
