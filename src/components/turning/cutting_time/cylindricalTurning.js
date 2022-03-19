import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const CylindricalTurning = () => {
    const [result, setResult] = useState(0);
    const [lValue, setL] = useState();
    const [iValue, setI] = useState();
    const [dValue, setD] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVC] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('2.1').reset();
        setReset(true);
    };

    useEffect(() => {
        const cylindrical = (((lValue + 4) * iValue * Math.PI * dValue ) / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylindrical);
    }, [lValue, iValue, dValue, fValue, vcValue]);

    return (
        <form id="2.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.1. Tiện mặt trụ </b></h4>
                <div style={divInputStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Tổng chiều dài gia công: L(mm)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Số lần cắt: i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Đường kính phôi: D(mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Lượng chạy dao: f(mm)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Tốc độ cắt: v(m/ph)" placeholder="Nhập thông số" setValue={setVC}/>
                    </Grid>
                </Grid>
                </div>
                <Result  result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};