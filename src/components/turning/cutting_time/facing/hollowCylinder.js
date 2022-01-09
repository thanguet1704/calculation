import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/turning/cutting_time/facing/t1/t_vc.png';
import f from '../../../../public/img/turning/cutting_time/facing/t1/t_f.png';
import d1 from '../../../../public/img/turning/cutting_time/facing/t1/t_d1.png';
import d2 from '../../../../public/img/turning/cutting_time/facing/t1/t_d2.png';
import i from '../../../../public/img/turning/cutting_time/t_i.png';
import wt1 from '../../../../public/img/w_t1.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const HollowCylinder = () => {
    const [result, setResult] = useState(0);
    const [dValue, setD] = useState();
    const [d1Value, setD1] = useState();
    const [iValue, setI] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVc] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    useEffect(() => {
        const cylinder = (((4 + (dValue - d1Value) / 2) * iValue * Math.PI * ((dValue + d1Value) / 2)) 
        / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylinder);
    }, [dValue, d1Value, iValue, fValue, vcValue]);

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[Hollow Cylinder]</b></h4>
                <div style={divInputStyle}>
                    <InputCommon src={d1} placeholder="Max. Diameter" setValue={setD}/>
                    <InputCommon src={d2} placeholder="Min. Diameter" setValue={setD1}/>
                    <InputCommon src={i} placeholder="No.of holes" setValue={setI}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setVc}/>
                </div>
                <Result src={wt1} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};