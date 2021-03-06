import React, { Component } from "react";
import { FaWindowClose, FaCaretSquareDown } from "react-icons/fa"

class TourList extends Component {

    state = {
        toShow: false,
    }

    handleChange = () => {
        this.setState({
            toShow: !this.state.toShow
        })
    }

    render() {
        const { id, city, name, img, info } = this.props.tours
        const { remove } = this.props
        return (
            <div>
                <div className="img-container">
                    <img src={img} alt="" />
                    <span onClick={() => { remove(id) }}><FaWindowClose></FaWindowClose></span>
                </div>
                <div className="tour-detail">
                    <h4>{city}</h4>
                    <h5>{name}</h5>
                    <h6>info <span onClick={this.handleChange}><FaCaretSquareDown></FaCaretSquareDown></span></h6>
                    {this.state.toShow && <p>{info}</p>}
                </div>
            </div>
        )
    }
}





export default TourList;