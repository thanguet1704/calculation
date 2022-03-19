import { Selector } from '../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { Phois } from './data_driling11';

export const Drilling11 = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [ds, setDs] = useState([]);
    const [d, setD] = useState(0);
    const [selectedD, setSelectedD] = useState(false);

    const [tocDoCat, setTocDoCat] = useState(0);
    const [luongChayDao, setLuongChayDao] = useState(0);

    const handleOnClick = () => {
        setDs([]);
        setD(0);
    };

    useEffect(() => {
        setDs(phois?.find(item => item.value === phoi)?.duongKinh);
        setTocDoCat(phois?.find(item => item.value === phoi)?.tocDoCat);
    }, [phoi]);

    useEffect(() => {
        setLuongChayDao(ds?.find(item => item.value === d)?.luongChayDao)
    }, [d]);

    return (
        <form id="khoan1.1">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>1.1. Tốc độ cắt và lượng chạy dao khi khoét bằng dao khoét làm từ thép gió.</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} lg={6}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item sm={12} lg={6}> 
                        <Selector text="Đường kính lỗ khoan D (mm)" items={ds} setSelected={setSelectedD} setValue={setD} disable={selectedPhoi}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}> 
                        <Result text="Tốc độ cắt" result={tocDoCat} unit="ph" setValue={setTocDoCat} />
                    </Grid>
                    <Grid item sm={12} md={6}>
                        <Result text="Lượng chạy dao" result={luongChayDao} unit="ph" setValue={setLuongChayDao} />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};