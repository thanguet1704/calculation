const resultStyle = {
    height: 45,
    width: '50%',
    fontSize: 25,
    textAlign: 'right',
    backgroundColor: '#264653',
    color: 'white',
    borderRadius: 10,
    padding: '0 10px 0 0px',
    overflow: 'hidden',
    margin: '20px auto 0',
    position: 'relative',
};

const imgStyle = {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 'auto',
};

const outputStyle = {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 'auto',
    color: '#fff',
    display: 'inline',
    textAlign: 'right',
    overflow: 'hidden',
    padding: 5
};

const spanStyle = {
    fontSize: '50%'
};

export const Result = ({ src, result, unit, sup}) => {
    return (
        <p style={resultStyle}>
            <output style={outputStyle}>{result || 'None'} <span style={spanStyle}>{unit}<sup>{sup}</sup></span></output>
            <img src={src} alt="" style={imgStyle} />
        </p>
    );
};