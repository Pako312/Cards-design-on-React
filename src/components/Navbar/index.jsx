import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styles from './style.module.scss'
import UploadIcon from '@mui/icons-material/Upload';
import DownloadIcon from '@mui/icons-material/Download';



const NavBar = () => {
    return (
        <div className={styles.appBox}  >
            <Box>
                <Toolbar className={styles.NavBar}>
                    <Typography variant="h6" component="div" className={styles.CompanyBox}>
                        Companies
                        <div className='NavIcons'>
                            <Button startIcon={<UploadIcon />}>export</Button>
                            <Button startIcon={<DownloadIcon />}>import</Button>
                        </div>
                    </Typography>
                    <Button variant="contained" href="#contained-buttons" className={styles.addBtn}>
                        + Add
                    </Button>
                </Toolbar>
            </Box>

        </div>
    )
}

export default NavBar;