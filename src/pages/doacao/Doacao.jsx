import InfoCard from "../../components/infoCard/infoCard";
// imagens
import imgFamilia from "../../assets/img/igFamilia.png";
const Doacao = () => {
  return (
    <main>
      <h1>Doação</h1>
      <section>
        <article>
          <InfoCard
            img={imgFamilia}
            alt="Pessoa segurando caixa com doações de alimentos não perecíveis"
            subtitulo="Instituto grande familia"
            paragrafo="Contribua com alimentos não perecíveis e ajude famílias em situação de vulnerabilidade."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard />
        </article>
        <article>
          <InfoCard />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
