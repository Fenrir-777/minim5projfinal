import styles from './Menu.module.css';

export default function Menu(){
  return(
    <header className={styles.containerMenu}>
    
      <ul className={styles.menu}>
        <nav className={styles.nav}>
          <a href="#sobre">Sobre</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </ul>
    </header>
  )
}