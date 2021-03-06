import { InputCommon } from '../../common/input';
import { useEffect, useState } from 'react';
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
    const [l, setL] = useState(0);
    const [t, setT] = useState(0);
    const [g, setG] = useState(0);
    const [d, setD] = useState(0);
    const [vc, setVc] = useState(0);
    const [p, setP] = useState(0);
    const [ap, setAp] = useState(0);
    const [reset, setReset] = useState(false);

    const [selected, setSelected] = useState(0);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('tab-ex').reset();
        setReset(true);
    };

    useEffect(() => {
        const th = ((l * t * g * d * Math.PI) / (p * ap * vc * Math.pow(10, 3)));
        setResult(th);
    }, [l , t, g, d, vc, p, ap]);                                  

    return (
        <form id="tab-ex">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.3. Ti???n ren</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="T???ng chi???u d??i gia c??ng: L(mm)" placeholder="Nh???p th??ng s???" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector text="Chi???u s??u ren: t(mm)" setSelected={setSelected} items={tItems} disable={true} setValue={setT}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="S??? ?????u m???i: g" placeholder="Nh???p th??ng s???" setValue={setG}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="???????ng k??nh ph??i: D(mm)" placeholder="Nh???p th??ng s???" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="T???c ????? c???t: v(m/ph)" placeholder="Nh???p th??ng s???" setValue={setVc}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <Selector text="S??? l???n c???t: p" setSelected={setSelected} items={pItems} disable={true} setValue={setP}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Chi???u s??u c???t: ap(mm)" placeholder="Nh???p th??ng s???" setValue={setAp}/>
                    </Grid>
                </Grid>
                <Result result={result} unit="ph" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};