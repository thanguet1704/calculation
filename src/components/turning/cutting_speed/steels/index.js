import wvc from '../../../../public/img/w_vc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import { Selector } from '../../../common/selector';
import { cuttingSpeeds } from './data';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import { Table710 } from '../../../tables/710';

export const CuttingSpeedSteel = () => {
    const [result, setResult] = useState();

    const [selectedMaterial, setselectedMaterial] = useState(false);
    const [materialValue, setMaterialValue] = useState(0);

    const [cuttingMaterials, setCuttingMaterials] = useState(cuttingSpeeds.materials[0].cuttingMaterials);
    const [selectedCuttingMaterial, setSelectedCuttingMaterial] = useState(false);
    const [cuttingMaterialvalue, setCuttingMaterialValue] = useState(0);

    const [aps, setAps] = useState(cuttingMaterials[0].aps);
    const [selectedAp, setSelectedAp] = useState(false);
    const [apValue, setApValue] = useState(1);

    const [fs, setFs] = useState(aps[0].fs);
    const [fValue, setFValue] = useState();
    const [selectedF, setSelectedF] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setselectedMaterial(false);
        setSelectedCuttingMaterial(false);
        setSelectedAp(false);
        setMaterialValue(0);
        setCuttingMaterials(cuttingSpeeds.materials[0].cuttingMaterials);
        setAps(cuttingMaterials[0].aps);
        setFs(aps[0].fs);
    };
    
    useEffect(() => {
        setCuttingMaterials(cuttingSpeeds.materials.find(item => item.value === materialValue).cuttingMaterials);
    }, [materialValue]);

    useEffect(() => {
        setAps(cuttingMaterials.find(item => item.value === cuttingMaterialvalue).aps);
    }, [cuttingMaterialvalue]);

    useEffect(() => {
        setFs(aps.find(item => item.value === apValue).fs);
    }, [apValue]);

    useEffect(() => {
        setResult(fs.find(item => item.value === fValue)?.result);
        console.log(result);
    }, [fValue]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <h4><b>1.1 Tốc độ cắt của thép khi tiện với cemented carbide với T = 15 phút</b></h4>
                <Grid container spacing={2}>
                    <Grid item xs={12} xl={3} lg={4}> 
                        <Selector 
                            text="Phôi" 
                            defaultLabel="Chọn Phôi" 
                            items={cuttingSpeeds.materials} 
                            setSelected={setselectedMaterial} 
                            setValue={setMaterialValue} 
                            disable={true}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector 
                            text="Vật liệu dao" 
                            defaultLabel="Chọn vật liệu dao" 
                            items={cuttingMaterials} 
                            setSelected={setSelectedCuttingMaterial} 
                            setValue={setCuttingMaterialValue} 
                            disable={selectedMaterial}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>  
                        <Selector 
                            text="Chiều sâu cắt ap(mm)" 
                            defaultLabel="Chọn chiều sâu cắt" 
                            items={aps} 
                            setSelected={setSelectedAp} 
                            setValue={setApValue} 
                            disable={selectedCuttingMaterial}/>
                    </Grid>
                    <Grid item xs={12} xl={3} lg={4}>
                        <Selector 
                            text="Lượng chạy dao f(mm/v)" 
                            defaultLabel="Chọn lượng chạy dao" 
                            items={fs} 
                            setValue={setFValue} 
                            setSelected={setSelectedF} 
                            disable={selectedAp}/>
                    </Grid>
                </Grid>
                <Result src={wvc} result={result} unit="m/min" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
            <div style={{ width: '100%', textAlign: 'center',}}>
                <Table710 />
            </div>
        </form>
    );
};