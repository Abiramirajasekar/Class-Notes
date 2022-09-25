const Card = ({ data = [] }) => {
    return (
        <div data-testid="data-list">
            {data.map((item) => {
                return (
                    <div data-testid="superhero-list" style={{ border: '0.5rem solid black', display: 'flex', justifyContent: 'space-around' }}>
                        {/*All the content of the card has to be added over here*/}
                        <h1 >Name:{item.name}</h1>
                        <h2>Height:{item.height}</h2>
                        <h2>Weight:{item.weight}</h2>
                        <h2>Power:{item.level}</h2>
                    </div>
                )
            })}
        </div>
    )
}

export default Card;
