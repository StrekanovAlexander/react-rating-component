import Star from './Star';

export default function Stars({ items, rate, changeRate }) {
    const stars = items.map((_, ix) => 
        <Star 
            key={ ix } 
            isActive={ ix < rate ? true : false }
            changeRate={ () => changeRate(ix) }
        />
    );
    return (
        <div>
            { stars }
        </div> 
    );
}