import wvc from '../../../../public/img/w_vc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import { Selector } from '../../../common/selector';
import ap from '../../../../public/img/turning/cutting_speed/t_ap.png';
import f from '../../../../public/img/turning/cutting_speed/t_f.png';
import { cuttingSpeeds } from './data';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

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
                <h4><b>1.1 Cutting speeds for steels at turning with cemented carbide for T = 15 min</b></h4>
                <div style={divInputStyle}>
                    <Selector text="Material" defaultLabel="Select Material" items={cuttingSpeeds.materials} setSelected={setselectedMaterial} setValue={setMaterialValue} disable={true}/>
                    <Selector text="Cutting Material" defaultLabel="Select Cutting Material" items={cuttingMaterials} setSelected={setSelectedCuttingMaterial} setValue={setCuttingMaterialValue} disable={selectedMaterial}/>
                    <Selector src={ap} defaultLabel="Select ap" items={aps} setSelected={setSelectedAp} setValue={setApValue} disable={selectedCuttingMaterial}/>
                    <Selector src={f} defaultLabel="Select f" items={fs} setValue={setFValue} setSelected={setSelectedF} disable={selectedAp}/>
                </div>
                <Result src={wvc} result={result} unit="m/min" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};