import { InputCommon } from '../../common/input';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import wt1 from '../../../public/img/w_t1.png';
import Grid from '@mui/material/Grid';
import { Selector } from '../../common/selector';

const tItems = [
    {
        value: 0.81,
        label: 'M8'
    },
    {
        value: 0.97,
        label: 'M10'
    },
    {
        value: 1.13,
        label: 'M12'
    },
    {
        value: 1.29,
        label: 'M16'
    },
    {
        value: 1.62,
        label: 'M20'
    },
    {
        value: 1.95,
        label: 'M24'
    },
    {
        value: 1.95,
        label: 'M27'
    },
    {
        value: 2.27,
        label: 'M30'
    },
]

const pItems = [
    {
        value: 10,
        label: 'M8'
    },
    {
        value: 11,
        label: 'M10'
    },
    {
        value: 12,
        label: 'M12'
    },
    {
        value: 14,
        label: 'M16'
    },
    {
        value: 15,
        label: 'M20'
    },
    {
        value: 16,
        label: 'M24'
    },
    {
        value: 16,
        label: 'M27'
    },
    {
        value: 18,
        label: 'M30'
    },
]

export const CuttingTimeT1 = () => {
    const [result, setResult] = useState(0);
    const [vcValue, setVC] = useState(0);
    const [fValue, setF] = useState(0);
    const [lValue, setL] = useState(0);
    const [dValue, setD] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form id="tab-ex">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.3. Tiện ren</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Tổng chiều dài gia công: L(mm)" placeholder="Nhập thông số" setValue={setVC}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector text="Chiều sâu ren: t(mm)" defaultLabel="Chọn thông số" items={tItems} disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Số đầu mối: g" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Đường kính phôi: D(mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Tốc độ cắt: vc(m/ph)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <Selector text="Số lần cắt: p" defaultLabel="Chọn thông số" items={pItems} disable={true} />
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Chiều sâu cắt: ap(mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                </Grid>
                <Result src={wt1} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};