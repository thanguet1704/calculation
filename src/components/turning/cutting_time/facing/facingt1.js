import { InputCommon } from '../../../common/input';
import vc from '../../../../public/img/turning/cutting_time/facing/t1/t_vc.png';
import f from '../../../../public/img/turning/cutting_time/facing/t1/t_f.png';
import d1 from '../../../../public/img/turning/cutting_time/facing/t1/t_d1.png';
import d2 from '../../../../public/img/turning/cutting_time/facing/t1/t_d2.png';
import N from '../../../../public/img/turning/cutting_time/facing/t1/t_npass.png';
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

export const FacingT1 = () => {
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
                <h3><b>[Facing]<br/>&emsp;Cutting Time T<sub>1</sub> (Reference : vc) [sec]</b></h3>
                <div style={divInputStyle}>
                    <InputCommon src={vc} placeholder="Cutting Speed" setValue={setN}/>
                    <InputCommon src={f} placeholder="Feed Rate" setValue={setF}/>
                    <InputCommon src={d1} placeholder="Max. Diameter" setValue={setL}/>
                    <InputCommon src={d2} placeholder="Min. Diameter" setValue={setL}/>
                    <InputCommon src={N} placeholder="Number of Pass" setValue={setL}/>
                </div>
                <Result src={wtc} result={result} unit="sec" setValue={setResult} />
                <br></br>
                <Button variant="outlined" style={{ margin: '0 auto' }} onClick={handleOnClick} >Reset</Button>
            </div>
        </form>
    );
};