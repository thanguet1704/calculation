import { InputCommon } from '../../../common/input';
import wtc from '../../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const MillingCuttingTime = () => {
    const [result, setResult] = useState(0);
    const [n, setN] = useState(0);
    const [f, setF] = useState(0);
    const [l, setL] = useState(0);
    const [r, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay1.1#2').reset();
        setReset(true);
    };

    return (
        <form id="phay1.1#2">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.1. Đường kính dao và số lưỡi cắt của một số loại dao phay đơn thép gió.</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4} lg={6}> 
                        <InputCommon text="Kiểu dao" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <InputCommon text="Loại dao" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Đường kính dao" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                </Grid>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};