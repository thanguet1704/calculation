import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling4 = () => {
    const [result, setResult] = useState(0);
    const [m, setM] = useState(0);
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan4').reset();
        setReset(true);
    };

    useEffect(() => {
        const P = (m * n) / (9.55 * Math.pow(10, 3) * n2);
        setResult(P);
    }, [m, n , n2]);

    return (
        <form id="khoan4">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Mô men M (Nm)" placeholder="Nhập thông số" setValue={setM}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Số vòng quay n (v/ph)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Hiệu suất máy η (0,7 – 0,9)" min="0.7" max="0.9" placeholder="Nhập thông số" setValue={setN2}/>
                    </Grid>
                </Grid>
                <Result  result={result} text="Công suất yêu cầu:" unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};