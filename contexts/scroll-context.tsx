import { createContext, useState } from "react";

export interface ScrollContextType {
  activeSection: string | null;
  handleScrollToSection: (sectionId: string | null) => void;
}

export const ScrollToSectionContext = createContext<
  ScrollContextType | undefined
>(undefined);
