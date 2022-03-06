import { InputCommon } from '../../common/input';
import wtc from '../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Drilling12 = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [q, setQ] = useState(0);
    const [k, setK] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        document.getElementById('khoan1.2').reset();
        setReset(true);
    };

    return (
        <form id="khoan1.2">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>{`1.2. Tốc độ cắt Vc, lượng chạy dao f và số vòng quay n khi khoan với mũi khoan làm từ thép gió với chiều sâu khoan t = 5d, 
                các giá trị trong ngoặc [] có thể áp dụng cho mũi khoan làm từ cemented carbide. (Khi chiều sâu khoan 5d < t ≤ 10d các giá trị này giảm đi 20%)`}</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12}> 
                        <InputCommon text="Phôi" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <Result src={wtc} result={result} text="Tốc độ cắt" unit="sec" setValue={setResult} />
                    </Grid>
                    <Grid item sm={12} md={6}>  
                        <Result src={wtc} result={result} text="Lượng chạy dao" unit="sec" setValue={setResult} />
                    </Grid>
                    <Grid item sm={12} md={6}>  
                        <Result src={wtc} result={result} text="Số vòng quay" unit="sec" setValue={setResult} />
                    </Grid>
                    <Grid item sm={12} md={6}>  
                        <Result src={wtc} result={result} unit="sec" text="Đường kính mũi khoan" setValue={setResult} />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};