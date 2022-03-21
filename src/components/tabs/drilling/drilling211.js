import { InputCommon } from '../../common/input';
import { Selector } from '../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { Phois,kvItems } from './data_drilling211';

export const Drilling211 = () => {
    const [result, setResult] = useState(0);
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [kc, setKc] = useState(0);
    const [z, setZ] = useState(0);

    const [kv, setKv] = useState(0);
    const [selectedKv, setSelectedKv] = useState(false);

    const [kver, setKver] = useState(1.3);
    const [kst, setKst] = useState(1.2);
    const [h, setH] = useState(0);

    const handleOnClick = () => {
        setResult(0);
        setKc(0);
        setZ(0);
        document.getElementById('khoan3.1.1').reset();
    };

    useEffect(() => {
        const k = 1 / Math.pow(h, z) * kc * kv * kst * kver;
        setResult(k);
    }, [kc, z, h, kv, phoi]);

    useEffect(() => {
        setKc(Phois?.find(item => item.value === phoi)?.kc11.value)
        setZ(Phois?.find(item => item.value === phoi)?.z.value)
    }, [phoi]);

    return (
        <form id="khoan3.1.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>2.1 Lực cắt đơn vị k<sub>c</sub></b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} md={6} lg={4}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>
                        <InputCommon text="Lực cắt đơn vị kc1.1 " defaultValue={kc} setValue={setKc} disable={true}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Hằng số vật liệu z" defaultValue={z} setValue={setZ} disable={true}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Chiều dày lớp cắt" placeholder="Nhập thông số" setValue={setH}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}> 
                        <Selector text="Hệ số hiệu chỉnh tốc độ cắt: Kv" setSelected={setSelectedKv} disable={true} setValue={setKv} items={kvItems}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Hệ số hao mòn Kver" defaultValue={kver} setValue={setKver} disable={true}/>
                    </Grid>
                    <Grid item sm={12} md={6} lg={4}>  
                        <InputCommon text="Hệ số nén phoi Kst" defaultValue={kst} setValue={setKst} disable={true}/>
                    </Grid>
                </Grid>
                <Result  result={result} text="Lực cắt đơn vị kc" unit="N/mm2" />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};