const resultStyle = {
    display: 'block',
    height: 45,
    width: '50%',
    fontSize: 25,
    lineHeight: 45,
    textAlign: 'right',
    backgroundColor: '#004C31',
    color: '#FFF',
    borderRadius: 10,
    padding: '0 10px 0 0px',
    overflow: 'hidden',
    margin: '20px auto 0',
    position: 'relative',
    zIndex: -1,
};

const imgStyle = {
    position: 'absolute',
    left: 0,
    height: '100%',
    width: 'auto'
};

const outputStyle = {
    position: 'absolute',
    right: 0,
    height: '100%',
    width: 'auto',
    zIndex: 10,
    color: '#fff',
    display: 'inline',
};

export const Result = ({ src, result, unit}) => {
    return (
        <p style={resultStyle}>
            <img src={src} alt="" style={imgStyle} />
            <output style={outputStyle}>{result}</output>
            <span>{unit}</span>
        </p>
    );
};