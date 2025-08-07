'use client'
import React, { createContext } from "react";
import { benefits, steps, plans, testimonials, faqs, videoData } from "@/public/assets/data";

export const HomeContext = createContext();

export const HomeProvider = ({ children }) => {
  return (
    <HomeContext.Provider value={{ benefits, steps, plans, testimonials, faqs, videoData }}>
      {children}
    </HomeContext.Provider>
  );
};
