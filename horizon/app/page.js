import Link from "next/link";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const Homepage = () => {
  return (
    <div>
      <div className="mb-5">
        <Hero />
      </div>
      <Link href="/allproducts" className="btn btn-accent text-base-100">
        Get Started
      </Link>
    </div>
  );
};
export default Homepage;
