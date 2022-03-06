import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling11 = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan1.1').reset();
        setReset(true);
    };

    return (
        <form id="khoan1.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.1. Tốc độ cắt và lượng chạy dao khi khoét bằng dao khoét làm từ thép gió.</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12}> 
                        <InputCommon text="Phôi" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}> 
                        <Result src={wtc} text="Tốc độ cắt" result={result} unit="sec" setValue={setResult} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Result src={wtc}  text="Lượng chạy dao" result={result} unit="sec" setValue={setResult} />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};