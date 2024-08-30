import React, { useState } from "react";
import styled from "@emotion/styled";

export const theme = {
  colors: {
    primary: "#2C3E50",
    secondary: "#8E44AD",
    accent: "#E74C3C",
    background: "#ECF0F1",
    text: " #2C3E50",
    info: "#17a2b8",
    light: "#f8f9fa",
    dark: "#343a40",
  },

  fonts: {
    body: "Arial, sans-serif", // Body font for the entire app
    heading: "Georgia, serif", // Font for headings
  },
  spacing: {
    small: "8px", // Small spacing
    medium: "16px", // Medium spacing
    large: "24px", // Large spacing
  },
  shadows: {
    card: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow for cards and containers
  },
  borderRadius: {
    small: "4px", // Small border-radius for elements
    medium: "8px", // Medium border-radius for containers
  },
  fontSizes: {
    small: "14px",
    medium: "18px", // Font size for the card title
  },
};
