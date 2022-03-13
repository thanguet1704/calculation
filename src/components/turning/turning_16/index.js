import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Selector } from '../../common/selector';
import { Rens } from './data';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Turning16 = () => {
    const [rens, setRens] = useState(Rens);
    const [ren, setRen] = useState(-1);
    const [selectedRen, setSelectedRen] = useState(false);

    const [hm, setHM] = useState(0);
    const [hs, setHS] = useState(0);

    const handleOnClick = () => {
        setHM(0);
        setHS(0);
    };

    useEffect(() => {
        setHM(rens.find(item => item.value === ren)?.hm);
        setHS(rens.find(item => item.value === ren)?.hs);
    }, [ren]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>1.6. Tốc độ cắt khi tiện ren ngoài</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <Selector text="Kiểu ren" items={rens} setSelected={setSelectedRen} setValue={setRen} disable={true}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Result text="Tốc độ cắt HS:" result={hm} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Tốc độ cắt HM:" result={hs} unit="s"/>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};