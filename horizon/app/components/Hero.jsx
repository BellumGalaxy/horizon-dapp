const carouselImages = [
  "/images/hero1.webp",
  "/images/hero3.webp",
  "/images/hero2.webp",
  "/images/hero4.webp",
];

const Hero = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      {/* Infos */}
      <div>
        <h1 className="text-5xl mb-8 font-bold">Horizon Financial Products</h1>
        <h2 className="mb-8 font-bold">
          Welcome to Horizon: Democratizing Access to the Web3 Ecosystem
        </h2>
        <p className="mb-4">
          Horizon is an innovative DEFI protocol, designed to simplify and
          secure access to the world of decentralized finance, especially for
          middle and low-income individuals. With Horizon, you can explore the
          potential of Web3 with confidence and transparency.
        </p>
        <p className="mb-4">
          At Horizon, we are committed to offering a secure, transparent, and
          inclusive platform. Our goal is to open the doors of the Web3
          ecosystem to everyone, regardless of their income level or knowledge
          of cryptocurrencies.
        </p>
      </div>
      {/* Carousel */}
      <div className="hidden h-[28rem] lg:carousel carousel-center p-4 space-x-4 bg-neutral rounded-box">
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
