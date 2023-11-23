import { Typography } from '@mui/material';
import logo from '../assets/img/logo.svg'
import NightModeToggle from './night_mode_toggle';

const navItems = [
    { name: 'home', link: '/' },
    { name: 'search', link: 'search' },
    { name: 'about', link: 'about' },
];

export default function Header() {
    return (
        <div className="header_wrapper">
            <div className="container">
                <div className="header_content">
                    <div className="logo_wrapper">
                        <a href="/">
                            <img className='logo' src={logo} alt="" />
                        </a>
                    </div>
                    <div className="navigation">
                        <ul className="nav_list">
                            {navItems.map(item => (<li><a href={item.link}><Typography variant="h8" className='list_item'>{item.name}</Typography></a></li>))}
                        </ul>
                    </div>
                    <NightModeToggle/>
                </div>
            </div>
        </div>
    )
}