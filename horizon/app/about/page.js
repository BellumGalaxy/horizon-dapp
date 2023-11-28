import Link from "next/link";

const AboutPage = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Our focus is on
        </h1>
        <div className="stats bg-accent shadow">
          <div className="stat">
            <div className="stat-title text-base-100 text-4xl font-bold tracking-widest">
              People
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        A Horizon representa um avanço significativo na democratização do acesso
        ao ecossistema Web3, com um foco especial na inclusão financeira de
        indivíduos de média e baixa renda. Ao integrar tecnologias inovadoras
        como Chainlink VRF, CCIP, Functions e Automation, e a integração com a
        Tabela FIPE, a Horizon estabelece um novo padrão em termos de segurança,
        transparência e auditabilidade em operações financeiras
        descentralizadas.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Através da implementação de um sistema robusto de consórcios, o Horizon
        não apenas facilita a aquisição de bens e serviços, mas também abre
        caminho para o uso eficiente de Bens Tokenizados como garantias,
        ampliando as possibilidades de saque e investimento para os usuários.
        Este aspecto é particularmente revolucionário, pois alavanca o potencial
        dos ativos digitais de uma maneira que beneficia diretamente o usuário
        final, ao mesmo tempo em que mantém a integridade e a sustentabilidade
        do sistema.
      </p>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Além disso, a estrutura da Horizon está desenhada para evoluir e se
        adaptar às necessidades emergentes do mercado e dos usuários. Com planos
        futuros que incluem a criação de um mercado secundário para títulos, a
        exploração de parcerias para rendimentos adicionais, e a expansão para
        serviços de empréstimo e financiamento, a Horizon não é apenas uma
        solução para o presente, mas um investimento no futuro da finança
        descentralizada.
      </p>
    </>
  );
};
export default AboutPage;
