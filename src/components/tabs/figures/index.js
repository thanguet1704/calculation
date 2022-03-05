import Grid from '@mui/material/Grid';

const imgStyle = {
    padding: '0 5px',
    border: '2px solid #edaef9',
    borderRadius: '10px',
    boxSizing: 'border-box',
    maxWidth: 150,
    height: 'auto',
    verticalAlign: 'middle',
    backgroundColor: '#edaef9',
};

const pStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    color: 'rgb(103, 134, 255)',
    fontWeight: 'bold',
};

export const Figure = ({ figures }) => {
    return (
        <Grid container spacing={2} style={{ width: '100%'}}>
            {figures.map(item => {
                return (
                    <Grid item sm={4} md={3}>
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