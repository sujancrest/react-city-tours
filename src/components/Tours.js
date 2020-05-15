import React, { Component } from "react";
import TourList from "./TourList";
import { tourData } from "../tourData"


class Tours extends Component {

    state = {
        tours: tourData,
    }

    removeTour = id => {
        const { tours } = this.state
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        const tours = this.state.tours
        // console.log(tours)
        return (
            <section className="tour-block">
                {
                    tours.map(tour => {
                        return <TourList key={tour.id} tours={tour} remove={this.removeTour} />
                    })
                }
            </section>
        )
    }
}


export default Tours;