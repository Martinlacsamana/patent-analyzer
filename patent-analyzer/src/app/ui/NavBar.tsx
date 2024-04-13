import Link from 'next/link';
import NavLinks from '@/app/ui/nav-links';
// import Logo from '@/app/ui/acme-logo';
// import { PowerIcon } from '@heroicons/react/24/outline';
import styles from "@/app/ui/home.module.css";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <Link
        className="nav-home"
        href="/"
      >
        <div className="logo">
          {/* Replace with actual logo later */}
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="15" stroke="black" stroke-width="1" fill="#d0d0d0" />
          </svg>
        </div>
      </Link>
      <div className={styles.navContent}>
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button className="login">
            {/* Add login/profile button here */}
          </button>
        </form>
      </div>
    </div>
  );
}
