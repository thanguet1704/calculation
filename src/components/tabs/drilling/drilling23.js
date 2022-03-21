import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling23 = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [d, setD] = useState(0);
    const [k, setK] = useState(0);
    const [kc, setKc] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan2.3').reset();
        setReset(true);
    };

    useEffect(() => {
        const m = (p * p * d * kc * k) / (8 * Math.pow(10, 3));
        setResult(m);
    }, [p, d, k, kc]);

    return (
        <form id="khoan2.3">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.4 Taro</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={3}> 
                        <InputCommon text="Bước ren" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>
                        <InputCommon text="Đường kính mũi taro" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>  
                        <InputCommon text="Hệ số công cụ" placeholder="Nhập thông số" setValue={setK}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={3}>  
                        <InputCommon text="Lực cắt đơn vị" placeholder="Nhập thông số" setValue={setKc}/>
                    </Grid>
                </Grid>
                <Result  result={result} text="Mô men" unit="Nm" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};