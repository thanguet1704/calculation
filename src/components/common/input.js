import { COLOR_INPUT_BORDER } from '../common/color';

const inputStyle = {
    width: '100%',
    height: 40,
    // backgroundColor: '#EEE',
    borderRadius: 5,
    borderColor: COLOR_INPUT_BORDER,
    textAlign: 'right',
};

const imgStyle = {
    width: 'auto',
    height: 40
};

export const InputCommon = ({ src, placeholder, setValue }) => {
    return (
        <p>
            <img src={src} alt="" style={imgStyle} />
            <input type="number" placeholder={placeholder} inputmode="decimal" style={inputStyle}/>
        </p>
    );
};