import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const MillingPowerRequirement = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [m, setM] = useState(0);
    const [d, setD] = useState(0);
    const [l, setL] = useState(0);
    const [pt, setPt] = useState(0);
    const [pt2, setPt2] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('phay2.2').reset();
        setReset(true);
    };

    return (
        <form id="phay2.2">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>2.2. Chọn chiều rộng dao phay (Dao phay rãnh dạng đĩa) hoặc đường kính dao phay (dao phay ngón).</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4} lg={6}> 
                        <InputCommon text="Phôi" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <InputCommon text="Vật liệu dao" placeholder="Nhập thông số" setValue={setM}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Dao" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Lượng chạy dao răng" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Tốc độ cắt (Dao phay rãnh dạng đĩa)" placeholder="Nhập thông số" setValue={setPt}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Tốc độ cắt (Dao phay ngón)" placeholder="Nhập thông số" setValue={setPt2}/>
                    </Grid>
                </Grid>
                <Result src={wpc} result={result} unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};