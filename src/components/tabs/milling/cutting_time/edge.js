import { InputCommon } from '../../../common/input';
import wtc from '../../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';

export const Edge = () => {
    const [result, setResult] = useState(0);
    const [p, setP] = useState(0);
    const [d, setD] = useState(0);
    const [a, setA] = useState(0);
    const [g, setG] = useState(0);
    const [l, setL] = useState(0);
    const [r, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h4><b>1.2. Góc sau, góc trước, góc xoắn của một số dao phay thép gió (<sup>0</sup>)</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4} lg={6}> 
                        <InputCommon text="Phôi" placeholder="Nhập thông số" setValue={setP}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <InputCommon text="Loại dao" placeholder="Nhập thông số" setValue={setD}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Góc sau a" placeholder="Nhập thông số" setValue={setA}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Góc trước g" placeholder="Nhập thông số" setValue={setG}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <InputCommon text="Góc xoắn" placeholder="Nhập thông số" setValue={setL}/>
                    </Grid>
                </Grid>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};