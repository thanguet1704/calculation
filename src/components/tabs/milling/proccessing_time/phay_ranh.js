import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const PhayRanh = () => {
    const [result, setResult] = useState(0);
    const [l, setL] = useState(0);
    const [d, setD] = useState(0);
    const [i, setI] = useState(0);
    const [f1, setF1] = useState(0);
    const [f2, setF2] = useState(0);
    const [t, setT] = useState(0);
    const [n, setN] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay4.4').reset();
        setReset(true);
    };

    useEffect(() => {
        const th = ((t + 2) * i) / (f1 * n) + ((l - d) * i) / (f2 * n);
        setResult(th);
    }, [l, d, i, f1, f2, t, n])

    return (
        <form id="phay4.4">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>4.4. Phay rãnh</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Chiều dài phôi l (mm)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Đường kính dao D (mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Chiều sâu rãnh t(mm)" placeholder="Nhập thông số" setValue={setT}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Số lần phay i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao dọc f1(mm/vòng)" placeholder="Nhập thông số" setValue={setF1}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Lượng chạy dao dọc f2(mm/vòng)" placeholder="Nhập thông số" setValue={setF2}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Số vòng quay n(vòng/ph)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                </Grid>
                <Result result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};