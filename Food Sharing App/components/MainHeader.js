import Link from 'next/link';
import Image from 'next/image';
import Logo from '@/assets/logo.png';

import classes from './MainHeader.module.css';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <Link href={'/'} className={classes.logo}>
                <Image src={Logo} alt="Logo" priority />
                NextLevel Food
            </Link>
            <nav className={classes.nav}>
                <ul>
                    <li>
                        <Link href={'/meals'}>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href={'/community'}>community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
