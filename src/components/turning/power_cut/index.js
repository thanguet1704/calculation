import { InputCommon } from '../../common/input';
import wf from '../../../public/img/w_f.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { Selector } from '../../common/selector';
import { y0Items, kvItems, kstItems, kcItems, zItems } from './data';

export const PowerCut = () => {
    const [result, setResult] = useState(0);
    const [ap, setAp] = useState(0);
    const [f, setF] = useState(0);
    const [kc, setKc] = useState(0);
    const [a, setA] = useState(0);
    const [yt, setYt] = useState(0);
    const [y0, setY0] = useState(0);
    const [kv, setKv] = useState(0);
    const [kver, setKver] = useState(1.3);
    const [kst, setKst] = useState(0);
    const [z, setZ] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('tien3').reset();
        setReset(true);
    };

    useEffect(() => {
        const fc = ap * f * (kc / (f * Math.pow(Math.sin(a)), 2)) * (1 - (yt - y0) / 100) * kv * ( kst * kver);
        setResult(fc);
    }, [ap, f, kc, a, yt, y0, kv, kst, z]);

    return (
        <form id="tien3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Chiều sâu cắt: ap(mm)" placeholder="Nhập thông số" setValue={setAp}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Lượng chạy dao: f(mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <Selector text="Lực cắt đơn vị: kc1.1(N/mm2)" defaultLabel="Nhập thông số" disable={true} setValue={setKc} items={kcItems}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Góc cắt: α°" placeholder="Nhập thông số" setValue={setA}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Góc trước thực tế: γtat°" placeholder="Nhập thông số" setValue={setYt}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <Selector text="Góc trước: γ0°" defaultLabel="Chọn thông số" disable={true} setValue={setY0} items={y0Items}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector text="Hệ số hiệu chỉnh tốc độ cắt: Kv" defaultLabel="Chọn thông số" disable={true} setValue={setKv} items={kvItems}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Hệ số Kver" disable={true} setValue={setKver} defaultValue={kver}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector text="Hệ số nén: Kst" defaultLabel="Chọn thông số" setValue={setKst} items={kstItems} disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector text="Hằng số vật liệu: z" defaultLabel="Chọn thông số" setValue={setZ} items={zItems} disable={true}/>
                    </Grid>
                </Grid>
                <Result src={wf} result={result} unit="mm/rev" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};