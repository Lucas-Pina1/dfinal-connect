import s from "./paginaInicial.module.scss";
import banner from "../../assets/img/banner.png";

const PaginaInicial = () => {
  return (
    <main className={s.main}>
      <section className={s.info}>
        <h1>Projetos Sociais que transformam</h1>
        <p>
          Conectamos sua empresa com projetos sociais impactantes. Juntos,
          criamos mudanças reais na comunidade.
        </p>
        <button>Cadastrar Empresa ➔</button>
        <section className={s.infoDados}>
          <article>
            <h2>500+</h2>
            <h3>Empresas Voluntárias</h3>
          </article>
          <article>
            <h2>1.2K+</h2>
            <h3>Realizados</h3>
          </article>
          <article>
            <h2>50K+</h2>
            <h3>Impactadas</h3>
          </article>
        </section>
      </section>
      <img
        src={banner}
        alt="imagem de duas mãos juntas com varios bonequinhos recortados de papel formando uma ciranda com um globo ao meio, representando responsabilidade social e ambiental global"
      />
    </main>
  );
};

export default PaginaInicial;
