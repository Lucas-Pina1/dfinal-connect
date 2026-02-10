import s from "./usuario.module.scss";

//icons
import { MdOutlinePlace } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { IoCalendarClearOutline } from "react-icons/io5";

const Usuario = () => {
  return (
    <main className={s.main}>
      <section>
        <img
          src="https://avatars.githubusercontent.com/u/86132063?v=4"
          alt="Imagem do perfil do usuário"
        />
        <div className={s.div}>
          <div className={s.head}>
            <h1>Lucas Pina</h1>
            <h2>Voluntário ativo</h2>
          </div>
          <p>
            Apaixonado por fazer a diferença na comunidade. Acredito que
            pequenas ações podem transformar vidas e estou sempre em busca de
            novas oportunidades para ajudar.
          </p>

          <ul className={s.infos}>
            <li>
              <MdOutlinePlace size={"1.25rem"} /> Belém, PA
            </li>
            <li>
              <MdOutlineEmail size={"1.25rem"} />
              lucas@gmail.com
            </li>
            <li>
              <IoCalendarClearOutline size={"1.25rem"} />
              Membro desde Janeiro 2022
            </li>
          </ul>

          <ul className={s.skills}>
            <li>Educação</li>
            <li>Meio Ambiente</li>
            <li>Assistência Social</li>
            <li>Design</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Usuario;
