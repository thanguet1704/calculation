import { InputCommon } from '../../../common/input';
import n from '../../../../public/img/turning/cutting_time/facing/tc/t_n.png';
import f from '../../../../public/img/turning/cutting_time/facing/tc/t_f.png';
import d1 from '../../../../public/img/turning/cutting_time/facing/tc/t_d1.png';
import d2 from '../../../../public/img/turning/cutting_time/facing/tc/t_d2.png';
import wtc from '../../../../public/img/w_tc.png';
import { useState } from 'react';
import Button from '@mui/material/Button';
import { Result } from '../../../common/result';

const divInputStyle = {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
};

export const GroovingTC = () => {
    const [result, setResult] = useState(0);
    const [nValue, setN] = useState(0);
    const [fValue, setF] = useState(0);
    const [d1Value, setD1] = useState(0);
    const [d2Value, setD2] = useState(0);
    const [nPassValue, setNPass] = useState(0);
    const [reset, setReset] = useState(false);

    const handleOnClick = () => {
        setResult(0);
        setReset(true);
    };

    return (
        <form id="tab-gr">
            <div style={{ display: 'flex', flexDirection: 'column'}}>
                <h3><b>[Grooving]<br/>&emsp;Cutting Time T<sub>c</sub> (Reference : n) [sec]</b></h3>
                <div style={divInputStyle}>
                    <InputCommon src={n} placeholder="Spindle Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={d1} placeholder="Max. Diameter" setValue={setD1}/>
                    <InputCommon src={d2} placeholder="Min. Diameter" setValue={setD2}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};