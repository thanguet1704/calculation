import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/turning/cutting_time/external/t1/t_vc.png';
import f from '../../../../public/img/turning/cutting_time/external/t1/t_f.png';
import l from '../../../../public/img/turning/cutting_time/external/t1/t_l.png';
import d from '../../../../public/img/turning/cutting_time/external/t1/t_dm.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';
import wt1 from '../../../../public/img/w_t1.png';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const CuttingTimeT1 = () => {
    const [result, setResult] = useState(0);
    const [vcValue, setVC] = useState(0);
    const [fValue, setF] = useState(0);
    const [lValue, setL] = useState(0);
    const [dValue, setD] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form id="tab-ex">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h4><b>[External]<br/>&emsp;Cutting Time T<sub>1</sub> (Reference : vc) [sec]</b></h4>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setVC}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={l} placeholder="Length of Cut" setValue={setL}/>
                    <InputCommon src={d} placeholder="Diameter" setValue={setD}/>
                </div>
                <Result src={wt1} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};