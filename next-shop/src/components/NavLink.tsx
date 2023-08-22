"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavLink = ({ href, children}: { href: string, children:any }) => {

    const isActive = usePathname() === href;
    console.log(usePathname());
    console.log("href" + href)
    

    const activeClass = isActive ? 'active' : '';

    return (
        <Link className={activeClass + " flex items-center gap-3"} href={href}>
            {children}
        </Link>
    );
};

export default NavLink;
