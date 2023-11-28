import Link from "next/link";
import Hero from "./components/Hero";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <Link href="/allproducts" className="btn btn-accent text-base-100">
        Get Started
      </Link>
    </div>
  );
};
export default Homepage;
