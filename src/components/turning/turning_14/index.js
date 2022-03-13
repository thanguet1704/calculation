import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Selector } from '../../common/selector';
import { Phois } from './data';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Turning14 = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(Phois);

    const [luongChayDao, setLuongChayDao] = useState(0);
    const [chieuSauCat, setChieuSauCat] = useState(0);
    const [tocDoCat, setTocDoCat] = useState(0);

    const handleOnClick = () => {
        setPhois(Phois);
    };

    useEffect(() => {
        if (phoi !== 0) {
            setLuongChayDao(Phois?.find(item => item.value === phoi).luongChayDao.value);
            setTocDoCat(Phois?.find(item => item.value === phoi).tocDoCat.value);
            setChieuSauCat(Phois?.find(item => item.value === phoi).chieuSauCat.value);
        }
    }, [phoi]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>1.4. Tốc độ cắt khi tiện với dao kim cương</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}> 
                        <Result text="Lượng chạy dao" result={luongChayDao} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Result text="Chiểu sâu cắt" result={chieuSauCat} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Result text="Tốc độ cắt" result={tocDoCat} unit="s"/>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};