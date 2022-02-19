import { COLOR_INPUT_BORDER } from '../common/color';

const inputStyle = {
    width: '100%',
    height: 40,
    // backgroundColor: '#EEE',
    borderRadius: 5,
    borderColor: COLOR_INPUT_BORDER,
    textAlign: 'right',
    paddingRight: 10,
    boxSizing: 'border-box',
};

const imgStyle = {
    width: 'auto',
    height: 40
};

export const InputCommon = ({ src, placeholder, setValue, text, disable, defaultValue }) => {
    const handleOnChange = (e) => {
        setValue(e.target.value);
    }

    return (
        <p style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', paddingLeft: 20, paddingRight: 20}}>
           { text ? <b style={{ height: 40 }}>{text}</b> : <img src={src} alt="" style={imgStyle} />}
            <input type="number" placeholder={placeholder} inputmode="decimal" style={inputStyle} onChange={handleOnChange} disabled={disable} value={defaultValue}/>
        </p>
    );
};