/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import Problems from "./components/Problems";
import WhoThisIsFor from "./components/WhoThisIsFor";
import Solution from "./components/Solution";
import FreeDiagnosis from "./components/FreeDiagnosis";
import RaioXDigital from "./components/RaioXDigital";
import ExampleImprovement from "./components/ExampleImprovement";
import HowItWorks from "./components/HowItWorks";
import MainOffer from "./components/MainOffer";
import Upgrades from "./components/Upgrades";
import SupportPlan from "./components/SupportPlan";
import Authority from "./components/Authority";
import StrongCTA from "./components/StrongCTA";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Problems />
      <WhoThisIsFor />
      <Solution />
      <FreeDiagnosis />
      <RaioXDigital />
      <ExampleImprovement />
      <HowItWorks />
      <MainOffer />
      <Upgrades />
      <SupportPlan />
      <Authority />
      <StrongCTA />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
