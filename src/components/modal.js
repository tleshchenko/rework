import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import React from 'react';
import Logo from '../assets/img/logo.svg';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';



export default function BasicModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () =>
        setOpen(true);
    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (
        <div>
            <a className="item_link" onClick={handleOpen}><Typography variant="h9" className='list_item'>about</Typography></a>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      maxWidth: 400,
                      bgcolor: 'background.paper',
                      boxShadow: 24,
                      borderRadius: 2,
                      p: 4,
                }}>

                       <div className="modal_content">
                            <Typography variant='h8' className='modal_desription'>all movies in one place. Enjoy!</Typography>
                            <ul className="modal_nav_list">
                                <li className="nav_items">
                                    <a href="https://instagram.com">< InstagramIcon className='item_link' sx={{ fontSize: 40 }}/></a>
                                </li>
                                <li className="nav_items">
                                    <a className='item_link' href="https://youtube.com"><YouTubeIcon  className='item_link' sx={{ fontSize: 40 }}/></a>
                                </li>
                                <li className="nav_items">
                                    <a className='item_link' href="https://facebook.com"><FacebookIcon  className='item_link' sx={{ fontSize: 40 }}/></a>
                                </li>
                            </ul>
                            <img className='modal_logo' src={Logo} alt="" />
                            <Typography variant='subtitle' className='credits'>Shoot out for <a href="https://beetroot.academy"><Typography className='beetroot_link'>Beetroot Academy</Typography></a></Typography>
                            <Typography variant='body2' className='year'>2023</Typography>
                       </div>
                </Box>
            </Modal>
        </div >
    );
}
