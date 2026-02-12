import s from '../Style.module.scss';

import CardInfo from '../../components/cardInfo/CardInfo';
// imagens
import carreira from '../../assets/img/carreira.png';
import experiencia from '../../assets/img/experiencia.png';
import acompanhamento from '../../assets/img/acompanhamento.png';

const Mentoria = () => {
  return (
    <main className={s.main}>
      <h1>Mentoria</h1>
      <section>
        <article>
          <CardInfo
            img={carreira}
            alt="Pessoas coversando em uma mesa e alinhando opniões"
            subtitulo="Mentoria de Carreira e Emprego"
            paragrafo="Orientação sobre currículo, entrevistas e primeiros passos no mercado de trabalho."
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <CardInfo
            img={experiencia}
            alt="Pessoas coversando em uma mesa, compartilhando conhecimento "
            subtitulo="Compartilhe Experiência"
            paragrafo="Oriente jovens e profissionais iniciantes em sua área."
            textoBotao="Quero participar"
          />
        </article>
        <article>
          <CardInfo
            img={acompanhamento}
            alt="Duas pessoas coversando em frente á um computador"
            subtitulo="Acompanhamento"
            paragrafo="Participe como guia em jornadas de aprendizado e desenvolvimento."
            textoBotao="Quero participar"
          />
        </article>
      </section>
    </main>
  );
};

export default Mentoria;
