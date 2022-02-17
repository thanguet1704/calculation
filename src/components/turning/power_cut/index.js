import { InputCommon } from '../../common/input';
import wf from '../../../public/img/w_f.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { Selector } from '../../common/selector';

export const PowerCut = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [d1Value, setD1] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <InputCommon text="Chiều sâu cắt: ap(mm)" placeholder="Nhập thông số" setValue={setN}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Lượng chạy dao: f(mm/vòng)" placeholder="Nhập thông số" setValue={setF}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <Selector text="Lực cắt đơn vị: kc1.1(N/mm2)" defaultLabel="Chọn thông số" disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                    <InputCommon text="Góc cắt: α°" placeholder="Nhập thông số" setValue={setD1}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Góc trước thực tế: γtat°" placeholder="Nhập thông số"/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <Selector text="Góc trước: γ0°" defaultLabel="Chọn thông số" disable={true} />
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Hệ số hiệu chỉnh tốc độ cắt: Kv" placeholder="Nhập thông số"/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Hệ số Kver" placeholder="Nhập thông số"/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Hệ số nén: Kst" placeholder="Nhập thông số"/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <InputCommon text="Hằng số vật liệu: z" placeholder="Nhập thông số"/>
                    </Grid>
                </Grid>
                <Result src={wf} result={result} unit="mm/rev" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};