import { Selector } from '../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { rens } from './data_drilling14';

export const Drilling14 = () => {
    const [ds, setFs] = useState(rens);
    const [d, setD] = useState(0);
    const [selectedD, setSelectedD] = useState(false);

    const [ren, setRen] = useState(0);
    const [dk, setDK] = useState(0);

    const handleOnClick = () => {
        setD(0);
        setDK(0);
        setRen(0);
        setSelectedD(false);
    };

    useEffect(() => {
        setRen(ds?.find(item => item.value === d)?.buocRen);
        setDK(ds?.find(item => item.value === d)?.duongKinh);
    }, [d]);

    return (
        <form id="khoan1.4">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.4. Đường kính lỗ khoan để taro với bước ren thô theo tiêu chuẩn DIN 13</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12}> 
                        <Selector text="Đường kính lỗ khoan D (mm)" items={ds} setSelected={setSelectedD} setValue={setD} disable={true}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <Result result={ren} text="Bước ren"  unit="mm" />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Result result={dk} text="Đường kính lỗ khoan" unit="mm" />  
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};