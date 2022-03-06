import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling14 = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan1.4').reset();
        setReset(true);
    };

    return (
        <form id="khoan1.4">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.4. Đường kính lỗ khoan để taro với bước ren thô theo tiêu chuẩn DIN 13</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12}> 
                        <InputCommon text="Đường kính ren danh nghĩa" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <Result src={wtc} result={result} text="Bước ren"  unit="sec" setValue={setResult} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Result src={wtc} result={result} text="Đường kính lỗ khoan" unit="sec" setValue={setResult} />  
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};