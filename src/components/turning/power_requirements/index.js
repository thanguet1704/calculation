import { InputCommon } from '../../common/input';
import vc from '../../../public/img/turning/power_requirements/t_vc.png';
import f from '../../../public/img/turning/power_requirements/t_f.png';
import ap from '../../../public/img/turning/power_requirements/t_ap.png';
import kc from '../../../public/img/turning/power_requirements/t_kc.png';
import eta from '../../../public/img/turning/power_requirements/t_eta.png';
import wtc from '../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../common/result';
import { Selector } from '../../common/selector';

const CuttingForces = [
    {
        value: 1500,
        label: '[P]:Un alloyed 1,500MPa'
    },
    {
        value: 2000,
        label: '[P]:Low alloyed 2,000MPa'
    },
    {
        value: 3000,
        label: '[P]:High alloyed 3,000MPa'
    },
    {
        value: 2000,
        label: '[M]:Austenitic 2,000MPa'
    },
    {
        value: 2500,
        label: '[M]:Ferritic 2,500MPa'
    },
    {
        value: 900,
        label: '[K]:Malleable 900MPa'
    },
    {
        value: 1200,
        label: '[K]:Grey 1,200MPa'
    },
    {
        value: 1500,
        label: '[K]:Ductile 1,500MPa'
    },
    {
        value: 500,
        label: '[N]:Al based alloys 500MPa'
    },
    {
        value: 900,
        label: '[N]:Cu based alloys 900MPa'
    },
    {
        value: 1400,
        label: '[S]:Ti based alloys 1,400MPa'
    },
    {
        value: 2500,
        label: '[S]:Fe based alloys 2,500MPa'
    },
    {
        value: 2800,
        label: '[S]:Ni based alloys 2,800MPa'
    },
    {
        value: 3000,
        label: '[S]:Co based alloys 3,000MPa'
    },
    {
        value: 3300,
        label: '[H]:Hardened steel 3,300MPa 50-55HRC'
    },
    {
        value: 4500,
        label: '[H]:Hardened steel 4,500MPa 60-63HRC'
    },
    {
        value: 3500,
        label: '[H]:Hardened cast iron 3,500MPa'
    },
];

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const PowerRequirement = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [d1Value, setD1] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={ap} placeholder="Depth of Cut" setValue={setD1}/>
                    <Selector src={kc} defaultLabe="Specific Cutting Force" items={CuttingForces}/>
                    <InputCommon src={eta} placeholder="Machine Efficiency(70-85)" setValue={setD1}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};