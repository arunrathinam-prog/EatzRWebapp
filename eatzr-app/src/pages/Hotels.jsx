import React from 'react';
import data from '../data/data.json'
import RestaurantCard from '../components/RestaurantCard'
class Hotels extends React.Component {
    constructor() {
        super();
        this.state = {
            list: data,
        };
    }



    sortMenu = (e) => {
        if (e.target.value === 'rating') {
            this.setState({
                list: data.sort(function (a, b) { return b.rating - a.rating })
            })

        }
        else if (e.target.value === 'review') {
            this.setState({
                list: data.sort(function (a, b) { return b.reviews - a.reviews })
            })

        }
        else if (e.target.value === 'name') {
            function compareName(a, b) {
                // case-insensitive comparison
                a = a.toLowerCase();
                b = b.toLowerCase();

                return (a < b) ? -1 : (a > b) ? 1 : 0;
            }
            this.setState({
                list: data.sort(function (a, b) { return compareName(a.name, b.name) })
            })

        }
        function getOption() {
            let selectElement = document.querySelector('#station');
            let output = selectElement.value;
            document.querySelector('.output').textContent = output;
        }
    }
    

    render() {
        return (
            <div className='flex flex-col' onclick="getOption()">
                <div>
                    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                        <p className="text-3xl text-gray-700 font-bold mb-5">
                            Welcome Arun !
                        </p>
                        <p className="text-gray-500 text-lg">
                            Good
                        </p>
                        <div>
                        <center>
                        <label for="cars">Please Select a station for Order Deliver </label>
                        <select id="station" name="station" className='rounded' >
                            <option value="Wardha">Wardha</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Akola">Akola</option>
                            <option value="Pune">Pune</option>
                        </select>
                        </center>
                    </div>
                    </div>
                   
                    <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
                        <div className="grid grid-cols-3 m-5">
                            {this.state.list.map(
                                x =>
                                    <RestaurantCard thumbnail_image={x.thumbnail_image} name={x.name} cuisines={x.cuisines} rating={x.rating} reviews={x.reviews} />

                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Hotels;