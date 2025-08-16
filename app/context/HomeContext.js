'use client'
import React, { createContext } from "react";
import { benefits, steps, plans, testimonials, faqs, videoData, teamMembers, awards, values } from "@/public/assets/data";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ benefits, steps, plans, testimonials, faqs, videoData, teamMembers, awards, values}}>
      {children}
    </HomeContext.Provider>
  );
};
