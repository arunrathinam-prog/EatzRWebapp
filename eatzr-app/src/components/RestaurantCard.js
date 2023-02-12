import React from 'react'
import {Link} from 'react-router-dom'
import data from '../data/data.json'
class RestaurantCard extends React.Component{
    constructor(){
        super();
        this.state={
            list: data
        };
    }

    render(){
        return(
            <div className="cart m-5">
                <Link to={{
                    pathname:`/order/${this.props.name}`}}>
                    <center><img src={this.props.thumbnail_image} alt={this.props.name}/></center>
                </Link>
                <center>
                    <h3 className="text-gray-500 text-lg" id="hotel-title">{this.props.name}</h3>
                    <p className="text-gray-500 text-lg">{this.props.cuisines}</p> 
                    <p className="text-gray-500 text-lg">Rating: {'★'.repeat(this.props.rating)}</p>
                    <p className="text-gray-500 text-lg">Reviews: {this.props.reviews}</p>
                    </center>
            </div>
        );
    }
}

export default RestaurantCard