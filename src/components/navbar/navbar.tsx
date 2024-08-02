import Image from 'next/image';
import styles from './navbar.module.css'; // CSS Modullarini import qilish
import { Logo } from '../../../public';
import Link from 'next/link';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
      <Link href={'/'}>  <Image src={Logo}  alt='Logo'/></Link>
        <ul className={styles.navbar_lists}>
             <a href="" className={styles.navbar_list}> Turlar</a>
             <a href='' className={styles.navbar_list}> Biz haqimizda</a>
             <a href='' className={styles.navbar_list}> Bizning aafzalliklarimiz</a>
             <a href='' className={styles.navbar_list}> Aloqa</a>
        </ul>
        <div className={styles.languages}>
            <select className={styles.language_list}>
                <option className={styles.language}>Rus</option>
                <option className={styles.language}>Uzbek</option>
                <option className={styles.language}>English</option>
            </select>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
