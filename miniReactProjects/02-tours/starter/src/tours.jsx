import Tour from "./tour";

const Tours = ({tours, removeTour}) => {
    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="title-underline" />
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour key={tour.id} {...tour}
                        removeTour={removeTour}
                    />
                })}
            </div>
        </section>
    )
}

export default Tours;