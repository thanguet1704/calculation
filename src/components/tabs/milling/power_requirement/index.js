import { Selector } from '../../../common/selector';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import Grid from '@mui/material/Grid';
import { VatLieuDaos } from './data';

export const MillingPowerRequirement = () => {
    const [vatLieuDaos, setVatLieuDaos] = useState(VatLieuDaos);
    const [vatLieuDao, setVatLieuDao] = useState(0);
    const [selectedVatLieuDao, setSelectedVatLieuDao] = useState(false);

    const [phois, setPhois] = useState([]);
    const [phoi, setPhoi] = useState(0);
    const [selectedPhoi, setSelectedPhoi] = useState(false);

    const [giaCongs, setGiaCongs] = useState([]);
    const [giaCong, setGiaCong] = useState(0);
    const [selectedGiaCong, setSelectedGiaCong] = useState(false);

    const [f, setF] = useState(0);
    const [v, setV] = useState(0);
    const [a, setA] = useState(0);
    const [g, setG] = useState(0);
    const [gz, setGz] = useState(0);
    const [l, setL] = useState(0);

    const handleOnClick = () => {
        setVatLieuDao(0);
        setSelectedVatLieuDao(false);
        setPhois([]);
        setPhoi(0);
        setSelectedPhoi(false);
        setGiaCongs([]);
        setGiaCong(0);
        setSelectedGiaCong(false);
        setF(0);
        setV(0);
        setA(0);
        setG(0);
        setGz(0);
        setL(0);
    };

    useEffect(() => {
        setPhois(vatLieuDaos?.find(item => item.value === vatLieuDao)?.phoi)
    }, [vatLieuDao]);

    useEffect(() => {
        setGiaCongs(phois?.find(item => item.value === phoi)?.kieuGiaCong)
    }, [phoi]);

    useEffect(() => {
        setF(giaCongs?.find(item => item.value === giaCong)?.f);
        setV(giaCongs?.find(item => item.value === giaCong)?.v);
        setA(giaCongs?.find(item => item.value === giaCong)?.a);
        setG(giaCongs?.find(item => item.value === giaCong)?.g);
        setGz(giaCongs?.find(item => item.value === giaCong)?.gz);
        setL(giaCongs?.find(item => item.value === giaCong)?.l);
    }, [giaCong]);

    return (
        <form id="phay2.2">
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>2.2. T???c ????? c???t v (m/ph), l?????ng ch???y dao r??ng s<sub>z</sub> (mm/r??ng) v?? th??ng s??? h??nh h???c dao l??m t??? cemented
 carbide. Gi?? tr??? khi ti???n th?? t????ng ???ng v???i chi???u s??u c???t t = 10mm</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={4} lg={6}> 
                        <Selector text="V???t li???u dao" items={vatLieuDaos} setSelected={setSelectedVatLieuDao} setValue={setVatLieuDao} disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>
                        <Selector text="Ph??i" items={phois} setSelected={setSelectedPhoi} setValue={setPhoi} disable={selectedVatLieuDao}/>
                    </Grid>
                    <Grid item xs={12} xl={4} lg={6}>  
                        <Selector text="Ki???u gia c??ng " items={giaCongs} setSelected={setSelectedGiaCong} setValue={setGiaCong} disable={selectedPhoi}/>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={6}> 
                        <Result text="sz:" result={f} unit="mm/r??ng" />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Result text="v:" result={v} unit="m/ph" />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Result text="????:" result={a} unit="??" />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Result text="????:" result={g} unit="??" />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Result text="??z??:" result={gz} unit="??" />
                    </Grid>
                    <Grid item xs={12} lg={6}> 
                        <Result text="????:" result={l} unit="??" />
                    </Grid>
                </Grid>
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};