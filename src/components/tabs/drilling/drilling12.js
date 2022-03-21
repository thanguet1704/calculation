import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';
import { Selector } from '../../common/selector';
import { Phois} from './data_driling12';

export const Drilling12 = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [luongChayDaos, setLuongChayDaos] = useState([]);
    const [luongChayDao, setLuongChayDao] = useState(0);
    const [selectedLuongChayDao, setSelectedLuongChayDao] = useState(false);

    const [ds, setDs] = useState([]);
    const [d, setD] = useState(0);
    const [selectedD, setSelectedD] = useState(false);

    const [tocDoCat, setTocDoCat] = useState(0);
    const [kq, setKq] = useState(0);
    const [text, setText] = useState("Lượng chạy dao:");

    const handleOnClick = () => {
        setTocDoCat(0);
        setKq(0);
        setSelectedPhoi(false);
        setSelectedLuongChayDao(false);
        setLuongChayDaos([]);
        setLuongChayDao(0);
        setDs([]);
        setD(0);
    }

    useEffect(() => {
        setTocDoCat(phois?.find(item => item.value === phoi)?.tocDoCat);
        setLuongChayDaos(phois?.find(item => item.value === phoi)?.soVongQuay);
    }, [phoi]);

    useEffect(() => {
        setDs(luongChayDaos?.find(item => item.value === luongChayDao)?.duongKinh);
        if (luongChayDao === 'n') {
            setText('Số vòng quay:');
        } else {
            setText('Lượng chạy dao:');
        }
    }, [luongChayDao]);

    useEffect(() => {
        setKq(ds?.find(item => item.value === d)?.luongChayDao);
    }, [d]);

    return (
        <form id="khoan1.2">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>{`1.2. Tốc độ cắt v, Lượng chạy dao s và số vòng quay n khi khoan với mũi khoan làm từ thép gió với chiều sâu khoan t = 5d, 
                các giá trị trong ngoặc [] có thể áp dụng cho mũi khoan làm từ cemented carbide. (Khi chiều sâu khoan 5d < t ≤ 10d các giá trị này giảm đi 20%)`}</b></h4>
                <Grid container spacing={2}>
                    <Grid item sm={12} lg={4}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item sm={12} lg={4}> 
                        <Selector text="Lượng chạy dao s và số vòng quay n" items={luongChayDaos} setSelected={setSelectedLuongChayDao} setValue={setLuongChayDao} disable={selectedPhoi}/>
                    </Grid>
                    <Grid item sm={12} lg={4}> 
                        <Selector text="Đường kính lỗ khoan D (mm)" items={ds} setSelected={setSelectedD} setValue={setD} disable={selectedLuongChayDao}/>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item sm={12} md={6}>
                        <Result result={tocDoCat} text="Tốc độ cắt:" unit="m/ph" setValue={setTocDoCat} />
                    </Grid>
                    <Grid item sm={12} md={6}>  
                        <Result result={kq} text={text} unit="mm/v" setValue={setKq} />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};