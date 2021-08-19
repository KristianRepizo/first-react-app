import React from 'react';
import '../styles/footer.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';

const Footer = () => {

    return(
        <footer className="footer">
            <p>Copyright &copy; 2021 PokeCollection</p>
            <div className="icons">
                <Tooltip title='visit instagram' arrow>
                    <InstagramIcon />
                </Tooltip>
                <Tooltip title='visit facebook' arrow>
                    <FacebookIcon />
                </Tooltip>
                <Tooltip title='visit twitter' arrow>
                    <TwitterIcon />
                </Tooltip>
                <Tooltip title='visit github' arrow>
                    <GitHubIcon />
                </Tooltip>
            </div>
        </footer>
    )
}

export default Footer;