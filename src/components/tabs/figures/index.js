import Grid from '@mui/material/Grid';

const imgStyle = {
    padding: '0 5px',
    border: '1px solid #cccccc',
    borderRadius: '10px',
    boxSizing: 'border-box',
    maxWidth: 150,
    height: 'auto',
    verticalAlign: 'middle',
    backgroundColor: '#e9c46a',
};

const pStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center',
    textAlign: 'center',
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