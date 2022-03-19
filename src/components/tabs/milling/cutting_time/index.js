import { Selector } from '../../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';
import { kieus } from './data';

export const MillingCuttingTime = () => {
    const [result, setResult] = useState(0);
    const [kds, setKds] = useState(kieus);
    const [kd, setKd] = useState(0);
    const [selectedKd, setSelectedKd] = useState(false);

    const [lds, setLds] = useState([]);
    const [ld, setLd] = useState(0);
    const [selectedLd, setSelectedLd] = useState(false);

    const [dks, setDks] = useState([]);
    const [dk, setDk] = useState(0);
    const [selectedDk, setSelectedDk] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setLds([]);
        setLd(0);
        setSelectedLd(false);
        setDks([]);
        setDk(0);
        setSelectedDk(false);
        setResult(0);
        setSelectedKd(false);
        setKd(0);
    };

    useEffect(() => {
        setLds(kds?.find(item => item.value === kd)?.loaiDao);
    }, [kd]);

    useEffect(() => {
        setDks(lds?.find(item => item.value === ld)?.duongKinh);
    }, [ld]);

    useEffect(() => {
        setResult(dks?.find(item => item.value === dk)?.kq);
    }, [dk]);

    return (
        <form id="phay1.1#1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.1. Đường kính dao và số lưỡi cắt của một số loại dao phay đơn thép gió.</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4}> 
                        <Selector text="Kiểu dao" items={kds} setSelected={setSelectedKd} setValue={setKd} disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Selector text="Loại dao" items={lds} setSelected={setSelectedLd} setValue={setLd} disable={selectedKd}/>
                    </Grid>
                    <Grid item xs={12} xl={4}>  
                        <Selector text="Đường kính dao" items={dks} setSelected={setSelectedDk} setValue={setDk} disable={selectedLd}/>
                    </Grid>
                </Grid>
                <Result text="Dao:" result={result} unit="ph"/>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};