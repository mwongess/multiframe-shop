import Navbar from "@/components/Navbar";
import News from "@/components/News";
import Products from "./products/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <News/>
      <Products />
    </>
  );
}
