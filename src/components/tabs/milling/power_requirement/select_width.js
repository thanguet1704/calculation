import { Selector } from '../../../common/selector';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';
import { Phois } from './data_select_width';

export const SelectWidth = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(1);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [vatLieuDaos, setVatLieuDaos] = useState([]);
    const [vatLieuDao, setVatLieuDao] = useState(1);
    const [selectedVatLieuDao, setSelectedVatLieuDao] = useState(false);

    const [loaiDaos, setLoaiDaos] = useState([]);
    const [loaiDao, setLoaiDao] = useState(1);
    const [selectedLoaiDao, setSelectedLoaiDao] = useState(false);

    const [show, setShow] = useState(false);
    const [thongSo, setThongSo] = useState({});

    const handleOnClick = () => {
        setPhoi(1);
        setSelectedPhoi(false);
        setVatLieuDaos([]);
        setVatLieuDao(1);
        setSelectedVatLieuDao(false);
        setLoaiDaos([]);
        setLoaiDao(1);
        setSelectedLoaiDao(1);
        setShow(false);
    };

    useEffect(() => {
        setVatLieuDaos(phois?.find(item => item.value === phoi)?.vatLieuDao);
    }, [phoi]);

    useEffect(() => {
        setLoaiDaos(vatLieuDaos?.find(item => item.value === vatLieuDao)?.loaiDao);
    }, [vatLieuDao]);

    useEffect(() => {
        setShow(true);
        setThongSo(loaiDaos?.find(item => item.value === loaiDao))
    }, [loaiDao]);

    return (
        <form id="phay2.1">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>2.1.  Lượng chạy dao răng s<sub>z</sub> (mm/răng) và tốc độ cắt cho phép khi phay với vật liệu dao thép gió và cemented carbide 
với chiều sâu cắt t = 8mm (phay thô) và t = 1mm (phay tinh) hoặc với bề rộng dao phay b (mm) (dao phay dạng đĩa)
 hoặc với đường kính dao phay Ø (dao phay ngón)</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={4}>
                        <Selector text="Vật liệu dao" items={vatLieuDaos} setSelected={setSelectedVatLieuDao} setValue={setVatLieuDao} disable={selectedPhoi}/>
                    </Grid>
                    <Grid item xs={12} xl={4}>  
                        <Selector text="Loại dao" items={loaiDaos} setSelected={setSelectedLoaiDao} setValue={setLoaiDao} disable={selectedVatLieuDao}/>
                    </Grid>
                </Grid>
                {show && <Grid container spacing={2}>
                    <Grid item xs={12}> 
                        {thongSo?.fz ? <Result text="sz" result={thongSo?.fz} unit="mm/răng"/> : <></>}
                        {thongSo?.t8 ? <Result text={thongSo?.t8.label} result={thongSo?.t8.value} unit="mm"/> : <></>}
                        {thongSo?.t1 ? <Result text={thongSo?.t1.label} result={thongSo?.t1.value} unit="mm"/> : <></>}
                        {thongSo?.rong ? <Result text={thongSo?.rong.label} result={thongSo?.rong.value} unit="mm"/> : <></>}
                        {thongSo?.duongKinh1 ? <Result text={thongSo?.duongKinh1.label} result={thongSo?.duongKinh1.value} unit="mm"/> : <></>}
                        {thongSo?.duongKinh2 ? <Result text={thongSo?.duongKinh2.label} result={thongSo?.duongKinh2.value} unit="mm"/> : <></>}
                    </Grid>
                </Grid>}
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};