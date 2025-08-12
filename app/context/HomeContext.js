'use client'
import React, { createContext } from "react";
import { benefits, steps, plans, testimonials, faqs, videoData, teamMembers, awards } from "@/public/assets/data";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ benefits, steps, plans, testimonials, faqs, videoData, teamMembers, awards}}>
      {children}
    </HomeContext.Provider>
  );
};
