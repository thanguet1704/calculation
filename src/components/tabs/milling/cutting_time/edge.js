import { Selector } from '../../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';
import { Phois } from './data_edge';

export const Edge = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [ds, setDs] = useState([]);
    const [d, setD] = useState(0);
    const [selectedD, setSelectedD] = useState(false);

    const [a, setA] = useState(0);
    const [g, setG] = useState(0);
    const [l, setL] = useState(0);

    const handleOnClick = () => {
        setPhoi(0);
        setSelectedPhoi(false);
        setDs([]);
        setD(0);
        setSelectedD(false);
        setA(0);
        setG(0);
        setL(0);
    };

    useEffect(() => {
        setDs(phois?.find(item => item.value === phoi)?.loaiDao);
    }, [phoi]);

    useEffect(() => {
        setA(ds?.find(item => item.value === d)?.a);
        setG(ds?.find(item => item.value === d)?.g);
        setL(ds?.find(item => item.value === d)?.l);
    }, [d]);

    return (
        <form id="phay1.2">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
            <h4><b>1.2. Góc sau, góc trước, góc xoắn của một số dao phay thép gió (<sup>0</sup>)</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Selector text="Kiểu dao" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Selector text="Kiểu dao" items={ds} setSelected={setSelectedD} setValue={setD} disable={selectedPhoi}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4} lg={6}> 
                        <Result text={'α:'} result={a} unit="độ"  />
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <Result text="γ:" result={g} unit="độ" />
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <Result text="λ:" result={l} unit="độ"  />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};