import Grid from '@mui/material/Grid';

const pStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgb(103, 134, 255)',
    fontWeight: 'bold',
    backgroundColor: 'rgb(237, 174, 249)',
    height: '90px',
    borderRadius: '10px',
    fontWeight: 'bold',
    fontSize: 'larger',
    width: '70%'
};

export const Figure = ({ figures }) => {
    return (
        <Grid container spacing={2} style={{ width: '100%'}}>
            {figures.map(item => {
                return (
                    <Grid item sm={4} md={3}>
                        <a href={item.href} >
                            <p style={pStyle} >
                                <b>{item.title}</b>
                            </p>
                        </a>
                    </Grid>
                );
            })}
        </Grid>
    );
};