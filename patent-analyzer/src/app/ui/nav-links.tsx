'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from "@/app/ui/home.module.css";
   
   
export default function NavLinks() {
const links = [
    {name:"Library", icon:"a", "href":"library"},
    // {name:"Patent", icon:"b", "href":"patent"}
];
const pathname = usePathname();
return (
    <>
    {links.map((link) => {
        const LinkIcon = link.icon;
        return (
        <Link
            key={link.name}
            href={link.href}
            className={styles.navItem}
        >
            {/* <LinkIcon className="nav-item-icon" /> */}
            <p className={styles.navItemText}>{link.name}</p>
        </Link>
        );
    })}
    </>
);
}