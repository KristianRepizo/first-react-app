import React from 'react';
import '../styles/gameDescription.css';
import CardMedia  from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';

function GameDescription ({
    gameImage, 
    name, 
    description, 
    habitat,
    abilities,
    height, 
    weight, 
    types, 
    }) {

    return(
        <>
        <h1 className="title">Description</h1>
        
        <Grid container justifyContent="center">
            <div className="content">
                <div className="card">
                    <CardMedia className="media" image={gameImage} />
                </div>
                <div className="aContainer">
                
                    <div className="desContainer">
                        <a href=" " className="name">{name}</a>
                        <label>{description}</label>
                    </div>
                    <div className="habContainer">
                        <div className="habContent">
                            <label id="hab-titles">Types</label>
                            {types.map((item, index) =>{
                                return(
                                    <div>
                                        <label id="hb-t" key={index} >{item.type.name} </label>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="habContent">
                            <label id="hab-titles">Abilities</label>
                            {abilities.map((item, index) =>{
                                return(
                                    <div>
                                        <label id="hb-t" key={index} >{item.ability.name} </label>
                                    </div>
                                );
                            })}
                        </div>
                    </div>    
                    <div className="habContainer">
                        <div className="habContent">
                            <label id="hab-titles">habitat</label>
                            <label id="hb-t">{habitat.name}</label>
                        </div>
                        <div className="habContent">
                            <label id="hab-titles">weight</label>
                            <label id="hb-t">{weight}</label>
                        </div>
                        <div className="habContent">
                            <label id="hab-titles">height</label>
                            <label id="hb-t">{height}</label>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </Grid>
        
        </>
    );
}

export default GameDescription;