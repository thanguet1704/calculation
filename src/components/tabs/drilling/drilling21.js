import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling21 = () => {
    const [result, setResult] = useState(0);
    const [d, setD] = useState(0);
    const [f, setF] = useState(0);
    const [kc, setKc] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan2.1').reset();
        setReset(true);
    };

    useEffect(() => {
        const m = Math.pow(d, 2) / 8 * f * kc * Math.pow(10, -3);
        setResult(m);
    }, [d, f, kc]);

    return (
        <form id="khoan2.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.1. Khoan thường</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={4}> 
                        <InputCommon text="Đường kính lỗ khoan D (mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <InputCommon text="Lượng chạy dao f (mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Lực cắt đơn vị kc (N/mm2)" placeholder="Nhập thông số" setValue={setKc}/>
                    </Grid>
                </Grid>
                <Result  result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};