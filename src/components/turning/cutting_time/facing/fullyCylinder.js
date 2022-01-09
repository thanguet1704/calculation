import { InputCommon } from '../../../common/input';
import i from '../../../../public/img/turning/cutting_time/t_i.png';
import f from '../../../../public/img/turning/cutting_time/facing/tc/t_f.png';
import d from '../../../../public/img/turning/cutting_time/facing/tc/t_d1.png';
import vc from '../../../../public/img/turning/cutting_time/t_vc.png';
import wtc from '../../../../public/img/w_tc.png';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const FullyCylinder = () => {
    const [result, setResult] = useState(0);
    const [iValue, setI] = useState();
    const [dValue, setD] = useState();
    const [fValue, setF] = useState();
    const [vcValue, setVc] = useState();
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    useEffect(() => {
        const cylinder = (((2 + dValue / 2) * iValue * Math.PI * (dValue / 2)) / (fValue * vcValue * 10 * 10 * 10)).toFixed(2);
        setResult(cylinder);
    }, [iValue, dValue, fValue, vcValue]);

    return (
        <form id="tab-fa">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[Fully Cylinder]</b></h4>
                <div style={divInputStyle}>
                    <InputCommon src={i} placeholder="No.of holes" setValue={setI}/>
                    <InputCommon src={d} placeholder="Diameter" setValue={setD}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setVc}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};