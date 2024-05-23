"use client"
import "@/css/tailwind.css";
import "@/app/globals.css";
import React, {useEffect} from 'react';import Head from 'next/head';
import Navbar from "@/components/Navbar";
import SectionContainer from "@/components/SectionContainer";
import Footer from "@/components/Footer";
import smoothscroll from 'smoothscroll-polyfill';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <html suppressHydrationWarning>
      <Head>
        <title>Noah Johansen - Developer Portfolio</title>
        <meta
          name="description"
          content="Welcome to Noah Johansen's personal website. Explore my projects, skills, and blog posts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="antialiased bg-gray-950 text-white">
          <SectionContainer>
            <div className="flex min-h-screen flex-col justify-between font-sans text-white">
              <Navbar />
              <main className="mb-auto">{children}</main>
              <Footer />
            </div>
          </SectionContainer>
      </body>
    </html>
  );
}

export default Layout