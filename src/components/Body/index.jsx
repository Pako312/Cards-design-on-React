import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import styles from './style.module.scss'
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

export default function Cards (props) {

    const {
        image,
        height,
        text,
        title,

    } = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height={height}
                    image={image}
                    alt="green iguana"
                />
                <CardContent className={styles.cardContent}>
                    <Typography className={styles.title} gutterBottom variant="h5" component="div" >
                    {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Lizards are a widespread group of squamate reptiles, with over 6,000
                        species, ranging across all continents except Antarctica
                    </Typography>
                </CardContent>
            </CardActionArea >

            <CardActions className={styles.cardActions}>
                <div>
                    <AccessTimeFilledIcon />
                    <span className={styles.span}>Updated 2h ago</span>
                </div>

                <div> <SystemUpdateAltIcon />
                    <span className={styles.span}>594 Downloads</span>
                </div>


            </CardActions>

        </Card >
    );
}
