import { LandingPageModule } from "@/modules/landing/module";
import { NextPage } from "next";
import { ReactElement } from "react";

const Home: NextPage = (): ReactElement => {
  return <LandingPageModule />;
};

export default Home;
