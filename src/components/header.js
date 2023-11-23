import { Typography } from '@mui/material';
import logo from '../assets/img/logo.svg'
import NightModeToggle from './night_mode_toggle';
import BasicModal from './modal';

// const navItems = [
//     { name: 'home', link: '/' },
//     { name: 'about', link: 'about' },
// ];

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
                            <li>
                                <a href="/" className="item_link"><Typography variant="h8" className='list_item'>home</Typography></a>
                            </li>
                            <li>
                                <BasicModal/>
                                {/* <a className="item_link"><Typography variant="h8" className='list_item'>about</Typography></a> */}
                            </li>
                        </ul>
                    </div>
                    <NightModeToggle/>
                </div>
            </div>
        </div>
    )
}