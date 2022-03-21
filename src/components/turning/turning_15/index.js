import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Selector } from '../../common/selector';
import { Phois } from './data';
import { Result } from '../../common/result';
import Grid from '@mui/material/Grid';

export const Turning15 = () => {
    const [phois, setPhois] = useState(Phois);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [luongs, setLuongs] = useState([]);
    const [luong, setLuong] = useState(0);
    const [selectedLuong, setSelectedLuong] = useState(false);

    const [tru, setTru] = useState(0);
    const [ranh, setRanh] = useState(0);
    const [catDut, setCatDut] = useState(0);
    const [khoan1, setKhoan1] = useState(0);
    const [khoan2, setKhoan2] = useState(0);
    const [khoan3, setKhoan3] = useState(0);
    const [khoan4, setKhoan4] = useState(0);
    const [taro, setTaro] = useState(0);

    const handleOnClick = () => {
        setPhois(Phois);
        setLuongs([]);
        setLuong(0);
    };

    useEffect(() => {
        setLuongs(Phois?.find(item => item.value === phoi).luong);
    }, [phoi]);

    useEffect(() => {
        setTru(luongs?.find(item => item.value === luong)?.tienTru);
        setRanh(luongs?.find(item => item.value === luong)?.tienRanh);
        setCatDut(luongs?.find(item => item.value === luong)?.catDut);
        setKhoan1(luongs?.find(item => item.value === luong)?.khoan1);
        setKhoan2(luongs?.find(item => item.value === luong)?.khoan2);
        setKhoan3(luongs?.find(item => item.value === luong)?.khoan3);
        setKhoan4(luongs?.find(item => item.value === luong)?.khoan4);
        setTaro(luongs?.find(item => item.value === luong)?.taro);
    }, [luong]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>1.5. Tốc độ cắt v (m/ph) và Lượng chạy dao s (mm/v) trong tiện tự động với T = 60 (ph)</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Selector text="Phôi" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={true}/>
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Selector text=" Tốc độ cắt v và Lượng chạy dao s" items={luongs} setSelected={setSelectedLuong} setValue={setLuong} disable={setSelectedPhoi}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Result text="Tiện mặt trụ và tiện mặt đầu" result={tru} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Tiện rãnh" result={ranh} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Cắt đứt" result={catDut} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="KhoanØ2.5 - 4" result={khoan1} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="KhoanØ4 - 6.3" result={khoan2} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Khoan Ø6.3 - 10" result={khoan3} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Khoan Ø10 - 16" result={khoan4} unit="s"/>
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <Result text="Taro" result={taro} unit="s"/>
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};