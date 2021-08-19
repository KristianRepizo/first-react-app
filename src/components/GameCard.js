import React from 'react';
import { withStyles } from '@material-ui/styles';
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import { Link } from 'react-router-dom';

function GameCard({name, classes, image, info}) {

    return(
        <Card className={classes.item}>
            
            <CardContent>
                <CardMedia className={classes.media} image={image} />
                <Link to={info}>
                    <Tooltip title='see more' arrow>
                        <div className={classes.contName}>
                            <Typography className={classes.font}>  
                                {name}
                            </Typography>
                        </div>
                    </Tooltip>
                </Link>
            </CardContent>
        </Card>
    );
}

export default withStyles({
    item: {
        display: "flex",
        alignItems: "center",
        minWidth: "350px",
        minHeight: "350px",
        textAlign: "center",
        boxSizing: "border-box",
        boxShadow: '2px 1px 29px 6px rgba(0, 0, 0, 0.3)',
        margin: '2em'
    },
    media: {
        minHeight: "350px",
        minWidth: "350px"
    },
    contName: {
        boxShadow: '2px 1px 29px 6px rgba(0, 0, 0, 0.3)',
        alignSelf: 'center',
        borderRadius: '10px',
        padding: '3px 9px',
        backgroundColor: '#3332',
        display: 'inline-block',
        margin: '1em 0'
    },
    /* contName: {
        opacity: '0.3'
    }, */
    font: {
        font: 'oblique bold 120% cursive',
        fontSize: '30px',
        textDecoration: 'none',
        textTransform: 'capitalize',
        color: '#333',
    }
})(GameCard);