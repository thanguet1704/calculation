import { InputCommon } from '../../../common/input';
import wtc from '../../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';
import { Table712 } from '../../../tables/712';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const FullyCylinder = () => {
    const [result, setResult] = useState(0);
    const [iValue, setI] = useState();
    const [dValue, setD] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVc] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('tab-fa').reset();
        setReset(true);
    };

    useEffect(() => {
        const cylinder = (((2 + dValue / 2) * iValue * Math.PI * (dValue / 2)) / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylinder);
    }, [iValue, dValue, fValue, vcValue]);

    return (
        <form id="tab-fa">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[Trụ đặc]</b></h4>
                <div style={divInputStyle}>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Số lần cắt: i" placeholder="Nhập thông số" setValue={setI}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Đường kính phôi: D(mm)" placeholder="Nhập thông số"setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao: f(mm)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Tốc độ cắt: vc(m/ph)" placeholder="Nhập thông số" setValue={setVc}/>
                    </Grid>
                </Grid>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
            <div style={{ width: '100%', textAlign: 'center',}}>
                <Table712 />
            </div>
        </form>
    );
};