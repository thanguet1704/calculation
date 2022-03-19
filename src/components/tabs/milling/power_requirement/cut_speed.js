import { InputCommon } from '../../../common/input';
import wpc from '../../../../public/img/w_pc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const CutSpeed = () => {
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
        document.getElementById('phay2.3').reset();
        setReset(true);
    };

    return (
        <form id="phay2.3">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>2.3. Tốc độ cắt v (m/ph), lượng chạy dao răng f<sub>z</sub> (mm/răng) và thông số hình học dao làm từ cemented carbide. 
                    Giá trị khi tiện thô tương ứng với chiều sâu cắt a = 10mm.</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Vật liệu dao" placeholder="Nhập thông số" setValue={setM}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Phôi" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Kiểu gia công" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Lượng chạy dao răng fz(mm/r)" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Tốc độ cắt v(m/ph)" placeholder="Nhập thông số" setValue={setPt}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Góc trước α°" placeholder="Nhập thông số" setValue={setPt2}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Góc sau γ°" placeholder="Nhập thông số" setValue={setPt2}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <InputCommon text="Góc xoắn λ°" placeholder="Nhập thông số" setValue={setPt2}/>
                    </Grid>
                </Grid>
                <Result result={result} unit="kW" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};