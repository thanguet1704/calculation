import { InputCommon } from '../../../common/input';
import wt1 from '../../../../public/img/w_t1.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const HollowCylinder = () => {
    const [result, setResult] = useState(0);
    const [dValue, setD] = useState();
    const [d1Value, setD1] = useState();
    const [iValue, setI] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVc] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('rong').reset();
        setReset(true);
    };

    useEffect(() => {
        const cylinder = (((4 + (dValue - d1Value) / 2) * iValue * Math.PI * ((dValue + d1Value) / 2)) 
        / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylinder);
    }, [dValue, d1Value, iValue, fValue, vcValue]);

    return (
        <form id="rong">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[Trụ rỗng]</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Số lần cắt: i" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Đường kính ngoài: D(mm)" placeholder="Nhập thông số"setValue={setD1}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Đường kính trong: d(mm)" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Lượng chạy dao: f(mm)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Tốc độ cắt: v(m/ph)" placeholder="Nhập thông số" setValue={setVc}/>
                    </Grid>
                </Grid>
                <Result result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};