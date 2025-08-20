import React from "react";
import LandingPage from "./LandingPage/page";
import { buildMetadataForPath } from "@/lib/seo";

export const generateMetadata = () => buildMetadataForPath("/");

const Home = () => {
  return (
    <div>
      <LandingPage />
    </div>
  );
};

export default Home;
