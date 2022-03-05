import '../../../src/index.css';

const inputStyle = {
    width: '100%',
    height: 50,
    borderRadius: 4,
    boxSizing: 'border-box',
    position: "relative",
    border: "2px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    borderColor: "#80bdff",
    textAlign: 'right',
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
            <input class="input-focus" 
                type="number" 
                placeholder={placeholder} 
                inputmode="decimal" 
                style={inputStyle} 
                onChange={handleOnChange}
                disabled={disable} 
                value={defaultValue}/>
        </p>
    );
};