import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const PhayTho = () => {
    const [result, setResult] = useState(0);
    const [l, setL] = useState(0);
    const [d, setD] = useState(0);
    const [a, setA] = useState(0);
    const [i, setI] = useState(0);
    const [f, setF] = useState(0);
    const [n, setN] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay4.2').reset();
        setReset(true);
    };

    useEffect(() => {
        const L = l + 3 + 2 * Math.sqrt(d * a - Math.pow(a, a));
        const th = (L * i) / (f * n);
        setResult(th);
    }, [l, d, a, i, f, n])

    return (
        <form id="phay4.2">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>4.2 Phay thô</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={6} xl={3} lg={4}> 
                        <InputCommon text="Chiều dài phôi l (mm)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>
                        <InputCommon text="Đường kính dao D (mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Chiều sâu cắt ae (mm)" placeholder="Nhập thông số" setValue={setA}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Số lần phay i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao f(mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Số vòng quay n(vòng/ph)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                </Grid>
                <Result src={wpc} result={result} unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};