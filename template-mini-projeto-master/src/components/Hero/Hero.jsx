import { useState } from "react";
import styles from "./Hero.module.css";


export default function Hero() {
  const [mostrarEmail, setMostrarEmail] = useState(false);

  function mostrarOuEsconderEmail() {
    setMostrarEmail(!mostrarEmail);
  }

  return (
    <section id="sobre" className={styles.hero}>
     
      <div className={styles.content}>
        <h2 className={styles.subtitle}>Olá, eu sou</h2>
        <img src="/fenrir.jpg" alt="The Fenrir" className={styles.image} />
        <h1 className={styles.title}>João Sousa</h1>
        <p className={styles.role}>Frontend Developer</p>

        <p className={styles.description}>
          Estudante de desenvolvimento web. 
          Cursando PdA (programadores do amanhâ), pretendo aperfeiçoar minhas habilidades.
          Em constante evolução.
        </p>

       
        <div className={styles.buttons}>
          <button 
            onClick={mostrarOuEsconderEmail} 
            className={styles.primaryBtn}
          >
            {mostrarEmail ? "Esconder email" : "Fale comigo"}
          </button>

          <a href="#projetos" className={styles.secondaryBtn}>
            Projetos
          </a>
        </div>

       
        {mostrarEmail && (
          <p className={styles.emailText}>
            Meu E-mail: joaomiguel.fs2105@gmail.com
          </p>
        )}
      </div>

      
      <div className={styles.imageWrapper}>
      
      </div>
    </section>
  );
}