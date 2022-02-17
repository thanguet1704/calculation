import { InputCommon } from '../../common/input';

import wpc from '../../../public/img/w_pc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const PowerRequirement = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [d1Value, setD1] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}> 
                        <InputCommon text="Lực cắt chính: Fc(N)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <InputCommon text=" Vận tốc cắt: vc(m/ph)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>  
                        <InputCommon text="Hiệu suất máy: ηM = 0.7-0.8" placeholder="Nhập thông số" setValue={setD1}/>
                    </Grid>
                </Grid>
                <div style={divInputStyle}>
                </div>
                <Result src={wpc} result={result} unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};