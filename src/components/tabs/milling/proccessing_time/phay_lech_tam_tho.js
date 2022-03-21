import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const PhayThoLechTam = () => {
    const [result, setResult] = useState(0);
    const [l, setL] = useState(0);
    const [d, setD] = useState(0);
    const [a, setA] = useState(0);
    const [i, setI] = useState(0);
    const [f, setF] = useState(0);
    const [n, setN] = useState(0);
    const [e, setE] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay4.2.2.1').reset();
        setReset(true);
    };

    useEffect(() => {
        const number1 = Math.pow(d / 2, 2);
        const number2 = Math.pow(a / 2 + e, 2);
        const L = l + 3 + d / 2 - Math.sqrt(number1 - number2);
        const th = (L * i) / (f * n);
        console.log('eeee',  number1)
        setResult(th);
    }, [l, d, a, i, f, n, e])

    return (
        <form id="phay4.2.2.1">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>4.2.2.1 Phay thô</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} xs={6} xl={3} lg={4}> 
                        <InputCommon text="Chiều dài phôi l (mm)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>
                        <InputCommon text="Đường kính dao D (mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Bề rộng dao phay B (mm)" placeholder="Nhập thông số" setValue={setA}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Số lần phay i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao s(mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Số vòng quay n(vòng/ph)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item sm={12} xs={6} xl={3} lg={4}>  
                        <InputCommon text="Độ lệch tâm e (mm)" placeholder="Nhập thông số" setValue={setE}/>
                    </Grid>
                </Grid>
                <Result result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};