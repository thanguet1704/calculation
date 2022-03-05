import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const PhayTinh = () => {
    const [result, setResult] = useState(0);
    const [l, setL] = useState(0);
    const [d, setD] = useState(0);
    const [i, setI] = useState(0);
    const [f, setF] = useState(0);
    const [n, setN] = useState(0);
    const [b, setB] = useState(0);
    const [e, setE] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay4.3').reset();
        setReset(true);
    };

    useEffect(() => {
        const L = l + 3 + d / 2 - Math.sqrt(Math.pow((d / 2), 2) - Math.pow((b / 2 + e), 2));
        const th = (L * i) / (f * n);
        setResult(th);
    }, [l, d, i, f, n, b, e])

    return (
        <form id="phay4.3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>4.3. Phay tinh</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Chiều dài phôi l (mm)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Đường kính dao D (mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Bề rộng dao phay B (mm)" placeholder="Nhập thông số" setValue={setB}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Số lần phay i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao f(mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Số vòng quay n(vòng/ph)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Độ lệch tâm e (mm)" placeholder="Nhập thông số" setValue={setE}/>
                    </Grid>
                </Grid>
                <Result src={wpc} result={result} unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};