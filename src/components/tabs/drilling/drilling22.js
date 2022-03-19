import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling22 = () => {
    const [result, setResult] = useState(0);
    const [d1, setD1] = useState(0);
    const [d2, setD2] = useState(0);
    const [f, setF] = useState(0);
    const [kc, setKc] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan2.2').reset();
        setReset(true);
    };

    useEffect(() => {
        const m = (Math.pow(d1, 2) - Math.pow(d2, 2)) / 8 * f * kc * Math.pow(10, -3);
        setResult(m);
    }, [d1, d2, f, kc]);

    return (
        <form id="khoan2.2">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.2. Khoét</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={3}> 
                        <InputCommon text="Đường kính lớn" placeholder="Nhập thông số" setValue={setD1}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>
                        <InputCommon text="Đường kính nhỏ" placeholder="Nhập thông số" setValue={setD2}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>  
                        <InputCommon text="Lượng chạy dao" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>  
                        <InputCommon text="Lực cắt đơn vị" placeholder="Nhập thông số" setValue={setKc}/>
                    </Grid>
                </Grid>
                <Result  result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};