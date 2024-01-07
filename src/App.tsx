import { lazy, Suspense } from "react";

const Divider = lazy(() => import("@components/common/Divider"));
const Navbar = lazy(() => import("@components/sections/Navbar"));
const Hero = lazy(() => import("@components/sections/Hero"));
const Features = lazy(() => import("@components/sections/Features"));
const Testimonials = lazy(() => import("@components/sections/Testimonials"));
const Pricing = lazy(() => import("@components/sections/Pricing"));
const Footer = lazy(() => import("@components/sections/Footer"));

import "./App.css";

function App() {
  return (
    <main className="dark:bg-[#020303] relative max-w-[110rem] mx-auto">
      <Suspense fallback={<></>}>
        {/* navbar */}
        <Navbar />
        {/* hero */}
        <Hero />
        <Divider />
        {/* features */}
        <Features />
        {/* testinomials */}
        <Testimonials />
        {/* pricing and plans */}
        <Pricing />
        <Divider />
        {/* footer */}
        <Footer />
        {/* auth modal */}
      </Suspense>
    </main>
  );
}

export default App;
