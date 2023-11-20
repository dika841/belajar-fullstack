"use client";

import { FC, ReactElement } from "react";
import { UseGetCaseStudy } from "./hook";

export const LandingPageModule: FC = (): ReactElement => {
  const { data } = UseGetCaseStudy();

  return (
    <section className="min-h-screen w-full">
      <div>
        <ul>
          {data?.data.map((item, idx) => (
            <li key={idx}>{item.title}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
