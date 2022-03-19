import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Selector } from '../../common/selector';
import { Phois } from './data';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Turning17 = () => {
    const [rens, setRens] = useState(Phois);
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
                <h4><b>1.7. Tốc độ cắt v<sub>60</sub> (m/ph) khi tiện với dao cemented carbide </b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <Selector text="Phôi" items={rens} setSelected={setSelectedRen} setValue={setRen} disable={true}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Result text="Tiện mặt trụ và tiện mặt đầu:" result={hm} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Tiện rãnh và cắt đứt:" result={hs} unit="s"/>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};