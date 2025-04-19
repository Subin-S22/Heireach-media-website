import { Metadata } from "next";
import Home from "./home/page";

export const metadata: Metadata = {
  title: "Best Digital Marketing Services in Bangalore | Heireach Media",
  description:
    "Get result-driven digital marketing services in Bangalore with SEO, PPC, SMM, and branding. Boost your online presence and grow your business today!",
};

export default function Main() {
  return <Home />;
}
