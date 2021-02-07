import styles from './style.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <img className={styles.logo} src="/logo.svg" alt="Taringa!" height={16} />
    </nav>
  );
}

export default Nav;
