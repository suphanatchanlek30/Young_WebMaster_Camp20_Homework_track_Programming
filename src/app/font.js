import { Athiti, Poppins, Inter } from "next/font/google";

const athiti = Athiti({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export { athiti, poppins, inter };