import cuttingTime from '../../../public/img/turning/figures/cutting_time.png';
import powerRequirements from '../../../public/img/turning/figures/power_requiments.png';
import cuttingSpeed from '../../../public/img/turning/figures/cutting_speed.png';
import spindleSpeed from '../../../public/img/turning/figures/spindle_speed.png';
import feedRate from '../../../public/img/turning/figures/feed_rate.png';
import cuttingForce from '../../../public/img/turning/figures/cutting_force.png';
import Grid from '@mui/material/Grid';

const figures = [
    {
        href: '#tc',
        src: cuttingTime,
        title: 'Cutting Time',
        alt: '',
    },
    {
        href: '#pc',
        src: powerRequirements,
        title: 'Power Requirements',
        alt: '',
    },
    {
        href: '#vc',
        src: cuttingSpeed,
        title: 'Cutting Speed',
        alt: '',
    },
    {
        href: '#n',
        src: spindleSpeed,
        title: 'Spindle Speed',
        alt: '',
    },
    {
        href: '#f',
        src: feedRate,
        title: 'Feed Rate',
        alt: '',
    },
    {
        href: '#p',
        src: cuttingForce,
        title: 'Cutting Force',
        alt: '',
    },
];

const imgStyle = {
    padding: '0 5px',
    border: '1px solid #cccccc',
    borderRadius: '10px',
    boxSizing: 'border-box',
    maxWidth: 150,
    height: 'auto',
    verticalAlign: 'middle',
};

const pStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
};

export const Figure = () => {
    return (
        <Grid container spacing={2} style={{ width: '100%'}}>
            {figures.map(item => {
                return (
                    <Grid item xs={4} >
                        <a href={item.href} >
                            <p style={pStyle} >
                                <img src={item.src} alt={item.alt} style={imgStyle}/>
                                {item.title}
                            </p>
                        </a>
                    </Grid>
                );
            })}
        </Grid>
    );
};