import React from "react";
import HeroSection from "@/components/HeroSection";
import ParallaxSection from "@/components/ParallaxSection";
import CounterSection from "@/components/CounterSection";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import ClientLogos from "@/components/ClientLogos";
import NewsletterForm from "@/components/NewsletterForm";
import CallToAction from "@/components/CallToAction";

function page() {
  return (
    <div>
      <HeroSection />
      <ParallaxSection />
      <CounterSection />
      <Timeline />
      <Testimonials />
      <ClientLogos />
      <NewsletterForm />
      <CallToAction />
    </div>
  );
}

export default page;
