import s from "../Style.module.scss";

import InfoCard from "../../components/infoCard/infoCard";
// imagens
import jovens from "../../assets/img/jovens.png";
import tecTransforma from "../../assets/img/tecTransforma.png";
import primeiroEmprego from "../../assets/img/primeiroEmprego.png";

const EventosEP = () => {
  return (
    <main className={s.main}>
      <h1>Eventos & Palestras</h1>
      <section>
        <article>
          <InfoCard
            img={jovens}
            alt="varios jovens participando de uma roda de conversa"
            subtitulo="Empoderando Jovens para o Futuro"
            paragrafo="Atividade: Palestra motivacional sobre liderança jovem e transformação social."
            segParagrafo = "Impacto: Inspirar adolescentes a se tornarem agentes de mudança em suas comunidades"
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={tecTransforma}
            alt="Varias pessoas tendo aulas em um computador"
            subtitulo="Tecnologia que Transforma"
            paragrafo="Atividade: Workshop de introdução à programação e inovação digital."
            segParagrafo = "Impacto: Preparar jovens para o mercado de trabalho através da tecnologia"
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <InfoCard
            img={primeiroEmprego}
            alt="Duas pessoas coversando em frente á um computador"
            subtitulo="Carreira e Primeiro Emprego"
            paragrafo="Atividade: Palestra com profissionais de RH sobre como preparar currículo, entrevistas e postura no mercado"
            segParagrafo = "Impacto: Ajudar jovens a conquistar oportunidades de trabalho."
            textoBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
};

export default EventosEP;
