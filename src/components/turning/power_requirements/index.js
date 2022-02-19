import { InputCommon } from '../../common/input';

import wpc from '../../../public/img/w_pc.png';
import { useState, useEffect } from 'react';
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
    const [vc, setVc] = useState(0);
    const [fc, setFc] = useState(0);
    const [nm, setNm] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    useEffect(() => {
        const p = (fc * vc) / (60 * Math.pow(10, 3) * nm);
        setResult(p)
    }, [vc, fc, nm]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}> 
                        <InputCommon text="Lực cắt chính: Fc(N)" placeholder="Nhập thông số" setValue={setFc}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <InputCommon text=" Vận tốc cắt: vc(m/ph)" placeholder="Nhập thông số" setValue={setVc}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>  
                        <InputCommon text="Hiệu suất máy: ηM = 0.7-0.8" placeholder="Nhập thông số" setValue={setNm}/>
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