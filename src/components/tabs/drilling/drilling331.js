import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling331 = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [o, setO] = useState(0);
    const [l, setL] = useState(0);
    const [i, setI] = useState(0);
    const [n, setN] = useState(0);
    const [f, setF] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan3.3.1').reset();
        setReset(true);
    };

    useEffect(() => {
        const L = 3 * p + l + 2;
        const th = (L * i) / (f * n);
        setResult(th);
    }, [p, o, l, i, n, f]);

    return (
        <form id="khoan3.3.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>3.3.1 Lỗ thông </b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={4}>
                        <InputCommon text="Bước ren" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Chiều sâu lỗ" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Góc mũi khoan" placeholder="Nhập thông số" setValue={setO}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Số lỗ khoan" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Số vòng quay" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Lượng chạy dao" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                </Grid>
                <Result  result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};