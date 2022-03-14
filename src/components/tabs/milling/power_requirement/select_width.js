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
                <h4><b>2.1. Chọn lượng chạy dao răng và tốc độ cắt cho phép với chiều sâu cắt a<sub>p</sub> = 8mm cho phay thô và chiều sâu cắt a<sub>p</sub> = 1mm 
                    cho phay tinh với dao phay mặt phẳng và dao phay mặt phẳng bù trực giao</b></h4>
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
                        {thongSo?.fz ? <Result text="fz" result={thongSo?.fz} unit="s"/> : <></>}
                        {thongSo?.ae8 ? <Result text={thongSo?.ae8.label} result={thongSo?.ae8.value} unit="s"/> : <></>}
                        {thongSo?.ae1 ? <Result text={thongSo?.ae1.label} result={thongSo?.ae1.value} unit="s"/> : <></>}
                        {thongSo?.rong ? <Result text={thongSo?.rong.label} result={thongSo?.rong.value} unit="s"/> : <></>}
                        {thongSo?.duongKinh1 ? <Result text={thongSo?.duongKinh1.label} result={thongSo?.duongKinh1.value} unit="s"/> : <></>}
                        {thongSo?.duongKinh2 ? <Result text={thongSo?.duongKinh2.label} result={thongSo?.duongKinh2.value} unit="s"/> : <></>}
                    </Grid>
                </Grid>}
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};