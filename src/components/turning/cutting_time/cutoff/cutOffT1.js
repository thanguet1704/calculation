import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/turning/cutting_time/facing/t1/t_vc.png';
import f from '../../../../public/img/turning/cutting_time/facing/t1/t_f.png';
import d1 from '../../../../public/img/turning/cutting_time/facing/t1/t_d1.png';
import d3 from '../../../../public/img/turning/cutting_time/cutoff/t1/t_d3.png';
import wt1 from '../../../../public/img/w_t1.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const CutOffT1 = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [lValue, setL] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form>
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h3><b>[Cut-Off]<br/>&emsp;Cutting Time T<sub>1</sub> (Reference : vc) [sec]</b></h3>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={d1} placeholder="Max. Diameter" setValue={setL}/>
                    <InputCommon src={d3} placeholder="Dia. at nmax" setValue={setL}/>
                </div>
                <Result src={wt1} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};