import s from "../Style.module.scss";

import InfoCard from "../../components/infoCard/infoCard";
// imagens
import reciclagem from "../../assets/img/reciclagem.png";
import tecnologia from "../../assets/img/tecnologia.png";
import esporte from "../../assets/img/esporte.png";

const Voluntariado = () => {
  return (
    <main className={s.main}>
      <h1>Voluntáriado</h1>
      <section>
        <article>
          <InfoCard
            img={reciclagem}
            alt="Imagem de três pessoas carregando caixas para reciclagem"
            subtitulo="Mutirão de reciclagem"
            paragrafo="Coletar materiais recicláveis e orientar sobre descarte consciente."
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={tecnologia}
            alt="Alunos fazendo aulas de informatica"
            subtitulo="Aulas de Tecnologia"
            paragrafo="Ensinar noções básicas de informática, internet segura e programação. Preparar jovens para o mercado de trabalho digital."
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={esporte}
            alt="Alunos fazendo aulas de educação fisica e esportes"
            subtitulo="Esporte e Inclusão"
            paragrafo="Organizar treinos e jogos que incentivem a participação de todos. Promover disciplina, saúde e trabalho em equipe entre jovens."
            textoBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Voluntariado;
