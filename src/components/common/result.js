const resultStyle = {
    height: 45,
    width: '70%',
    fontSize: '1rem',
    textAlign: 'right',
    backgroundColor: '#6786ff',
    color: 'white',
    borderRadius: 10,
    padding: '0 10px 0 0px',
    overflow: 'hidden',
    margin: '20px auto 0',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const imgStyle = {
    position: 'absolute',
    left: 0,
    height: '2rem',
    width: 'auto',
};

const outputStyle = {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 'auto',
    color: '#fff',
    textAlign: 'right',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 10
};

const spanStyle = {
    fontSize: '50%',
    marginLeft: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

export const Result = ({ src, result, unit, sup}) => {
    return (
        <p style={resultStyle}>
            <output style={outputStyle}>{result || 'None'} <span style={spanStyle}>{unit}<sup>{sup}</sup></span></output>
            <img src={src} alt="" style={imgStyle} />
        </p>
    );
};