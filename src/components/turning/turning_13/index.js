import wvc from '../../../public/img/w_vc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Selector } from '../../common/selector';
import { Phois } from './data';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Turning13 = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [doCungs, setDoCungs] = useState([]);
    const [doCung, setDoCung] = useState(0);
    const [selectedDoCung, setSelectedDoCung] = useState(false);

    const [giaCongs, setGiaCongs] = useState([]);
    const [giaCong, setGiaCong] = useState(0);
    const [selectedGiaCong, setSelectedGiaCong] = useState(false);

    const [luongChayDao, setLuongChayDao] = useState(0);
    const [tocDoCat, setTocDoCat] = useState(0);

    const handleOnClick = () => {
        setPhois(Phois);
        setSelectedPhoi(false);

        setDoCungs([]);
        setDoCung(0);
        setSelectedDoCung(false);

        setGiaCongs([]);
        setGiaCong(0);
    };
    
    useEffect(() => {
        setDoCungs(phois.find(item => item.value === phoi).doCung);
    }, [phoi]);

    useEffect(() => {
        if (doCung !== 0)
            setGiaCongs(doCungs?.find(item => item.value === doCung).giaCong);
    }, [doCung]);

    useEffect(() => {
        if (giaCong !== 0) {
            setLuongChayDao(giaCongs?.find(item => item.value === giaCong).luongChayDao.value);
            setTocDoCat(giaCongs?.find(item => item.value === giaCong).tocDoCat.value);
        }
    }, [giaCong]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>1.3. Tốc độ cắt và lượng chạy dao khi tiện với vật liệu dao ceramic </b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={4}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <Selector text="Độ cứng, độ bền" items={doCungs} setSelected={setSelectedDoCung} setValue={setDoCung} disable={selectedPhoi}/>
                    </Grid>
                    <Grid item xs={12} lg={4}>  
                        <Selector text="Kiểu gia công" items={giaCongs} setSelected={setSelectedGiaCong} setValue={setGiaCong} disable={selectedDoCung}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Result text="Lượng chạy dao" result={luongChayDao} unit="s" setValue={setLuongChayDao} />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Tốc độ cắt" result={tocDoCat} unit="s" setValue={setTocDoCat} />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};