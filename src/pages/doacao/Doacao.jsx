import s from "../Style.module.scss";

import InfoCard from "../../components/infoCard.jsx";
// imagens
import imgFamilia from "../../assets/img/igFamilia.png";
import livros from "../../assets/img/livros.png";
import instJovem from "../../assets/img/instJovem.png";

const Doacao = () => {
  return (
    <main className={s.main}>
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
          <InfoCard
            img={livros}
            alt="Imagem de três livros"
            subtitulo="Projeto Futuro na Escola"
            paragrafo="Projeto Futuro na Escola Doe livros, cadernos, lápis, mochilas e canetas para ajudar jovens a continuarem seus estudos com mais estrutura."
            textoBotao="Quero Doar"
          />
        </article>
        <article>
          <InfoCard
            img={instJovem}
            alt="Imagem de jovens consertando um computador"
            subtitulo="Instituto Conecta Jovem"
            paragrafo="Instituto Conecta Jovem Doe computadores usados, tablets ou celulares em bom estado para permitir que jovens tenham acesso ao mundo digital e novas oportunidades."
            textoBotao="Quero Doar"
          />
        </article>
      </section>
    </main>
  );
};

export default Doacao;
