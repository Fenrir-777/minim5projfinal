 import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <section id="projetos" className={styles.projetos}>
      <h2 className={styles.title}>Projetos</h2>
      <p className={styles.subtitle}>
       Meus Projetos
      </p>

      <div className={styles.grid}>
        
        <div className={styles.card}>
          <h3 className={styles.cardTitle}>Quiz Rick and Morty</h3>
          <p className={styles.cardDesc}>
            Quiz feito com HTML, JavaScript e CSS.
          </p>
          <a href="https://github.com/Fenrir-777/proj.fn.M2" className={styles.cardBtn}>Ver Projeto</a>
        </div>

       
      </div>
    </section>
  );
}
