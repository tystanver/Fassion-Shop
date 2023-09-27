"use client";

import { QueryClient, QueryClientProvider } from "react-query";

import HomePageContainer from "./(root)/homePage/HomePageContainer";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

export default function Home() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <main>
        <Navbar/>
       <HomePageContainer/>
       <Footer/>
      </main>
    </QueryClientProvider>
  );
}
