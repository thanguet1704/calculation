import { InputCommon } from '../../../common/input';
import wvc from '../../../../public/img/w_vc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const MillingCuttingSpeed = () => {
    const [result, setResult] = useState(0);
    const [b, setB] = useState(0);
    const [kc, setKc] = useState(0);
    const [kv, setKv] = useState(0);
    const [kver, setKver] = useState(0);
    const [kst, setKst] = useState(0);
    const [kg, setKg] = useState(0);
    const [vc, setVc] = useState(0);
    const [p, setP] = useState(0);
    const [n, setN] = useState(0);
    const [n2, setN2] = useState(0);
    const [z, setZ] = useState(0);
    const [b2, setB2] = useState(0);
    const [d, setD] = useState(0);
    const [fz, setFz] = useState(0);
    const [p2, setP2] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay3').reset();
        setReset(true);
    };

    useEffect(() => {
        const hm = ((114.6) * b2 * fz * Math.sin(p2) ) / (p * d);
        const pResult = (b * hm * kc * kv * kver * kst * vc * p * n) / (60 * Math.pow(10, 3) * n2 * Math.pow(hm, z) * 360);
        setResult(pResult);
    }, [b, kc, kver, kst, kv, kg, vc, p, n, n2, z, b2, d, fz, p2]);

    return (
        <form id="phay3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <Grid container spacing={2} style={{ width: '100%' }}>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Bề rộng vết cắt: b (mm)" placeholder="Nhập thông số" setValue={setB}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Lực cắt đơn vị: kc1.1 (N/mm2)" placeholder="Nhập thông số" setValue={setKc}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hệ số Kg" placeholder="Nhập thông số" setValue={setKg}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hệ số Kv" placeholder="Nhập thông số" setValue={setKv}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hệ số Kver" placeholder="Nhập thông số" setValue={setKver}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hệ số Kst" placeholder="Nhập thông số" setValue={setKst}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Tốc độ cắt: Vc (m/ph)" placeholder="Nhập thông số" setValue={setVc}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Góc tiếp cận: φs°" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Số lưỡi dao cắt: n" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hiệu suất động cơ: η (70 – 80%)" placeholder="Nhập thông số" setValue={setN2}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Hằng số vật liệu: z" placeholder="Nhập thông số" setValue={setZ}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Chiều rộng dao phay: B(mm)" placeholder="Nhập thông số" setValue={setB2}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Đường kính dao phay: D(mm)" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Lượng chạy dao răng: fz (mm/răng)" placeholder="Nhập thông số" setValue={setFz}/>
                    </Grid>
                    <Grid item sm={12} md={6} xl={3} lg={4}>
                         <InputCommon text="Góc bào: ψ°" placeholder="Nhập thông số" setValue={setP2}/>
                    </Grid>
                </Grid>
                <Result src={wvc} result={result} unit="m/min" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};