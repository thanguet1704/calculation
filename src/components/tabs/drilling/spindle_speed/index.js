import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/drilling/spindle_speed/m_vc.png';
import dc from '../../../../public/img/drilling/spindle_speed/m_dc.png';
import wn from '../../../../public/img/w_n.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const DrillingSpindleSpeed = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid item md={12} lg={6} xl={6}>
                        <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    </Grid>
                    <Grid item md={12} lg={6} xl={6}>
                        <InputCommon src={dc} placeholder="Diameter" setValue={setF}/>
                    </Grid>
                </Grid>
                <Result src={wn} result={result} unit="min" sup="-1" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};