import Link from 'next/link';

import styles from './style.module.css';

function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.anchor}>
          <img
            className={styles.logo}
            src="/logo.svg"
            alt="Taringa!"
            height={16}
          />
        </a>
      </Link>
    </nav>
  );
}

export default Nav;
