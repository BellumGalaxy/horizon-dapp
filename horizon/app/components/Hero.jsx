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
          Bem-vindo à Horizon: Democratizando o Acesso ao Ecossistema Web3
        </h2>
        <p className="mb-4">
          Horizon é um protocolo DEFI inovador, projetado para simplificar e
          tornar mais seguro o acesso ao mundo das finanças descentralizadas,
          especialmente para pessoas de média e baixa renda. Com a Horizon, você
          pode explorar o potencial da Web3 com confiança e transparência.
        </p>
        <p className="mb-4">
          Na Horizon, estamos comprometidos em oferecer uma plataforma segura,
          transparente e inclusiva. Nosso objetivo é abrir as portas do
          ecossistema Web3 para todos, independentemente do seu nível de renda
          ou conhecimento em criptomoedas.
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
