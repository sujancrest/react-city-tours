import React, { Component } from "react";
import { FaFan, FaCaretSquareDown } from "react-icons/fa"

class TourList extends Component {

    state = {
        toShow: false,
    }

    handleChange = () => {
        this.setState(prevState => ({
            toShow: !prevState.toShow
        }))
    }

    render() {

        const { id, city, name, img, info } = this.props.tours;
        const { remove } = this.props

        return (
            <div>
                <div className="img-container">
                    <img src={img} alt="" />
                    <span onClick={() => { remove(id) }}><FaFan /></span>
                </div>
                <div className="tour-detail">
                    <h3>{city}</h3>
                    <h4>{name}</h4>
                    <h5>info <span onClick={this.handleChange}><FaCaretSquareDown /></span></h5>
                    {this.state.toShow && <p>{info}</p>}
                </div>
            </div>
        )
    }
}

export default TourList

