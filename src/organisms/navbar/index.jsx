import Link from 'next/link';

import styles from './style.module.scss';

function Navbar() {
  return (
    <nav className={styles.navbar}>
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

export default Navbar;
