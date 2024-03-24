export default function Star({ isActive, changeRate }) {
    const defaultClass='fa fa-star fa-lg';
    const className = isActive ? `${ defaultClass } active` : defaultClass;
    
    return (
        <i 
            className={ className } 
            aria-hidden="true"
            onClick={ changeRate }
        />
    );
}