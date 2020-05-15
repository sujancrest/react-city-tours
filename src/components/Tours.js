import React, { Component } from "react";
// import Tourist from "../page/Tourist";
import { tourData } from "../tourData"
import TourList from "./TourList"


class Tours extends Component {
    state = {
        tours: tourData,
    }

    removeTours = id => {
        const { tours } = this.state;
        const sortedTours = tours.filter(tour => tour.id !== id);
        this.setState({
            tours: sortedTours
        })
    }

    render() {
        const { tours } = this.state
        // console.log(tours)
        return (
            <section className="tourlist">
                {tours.map(tour => {
                    return <TourList key={tour.id} tours={tour} remove={this.removeTours} />
                })}
            </section>
        )
    }
}




export default Tours;