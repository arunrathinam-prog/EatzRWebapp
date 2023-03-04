import React from 'react'
import '../styles/OrderStyle.css'
import Menu from '../components/Menu'
import data from '../data/data.json'
import MyCart from '../components/MyCart'
import Popup from 'reactjs-popup';
import {Link} from 'react-router-dom'
import 'reactjs-popup/dist/index.css';
import '../App.css'

class Orders extends React.Component {
    constructor() {
        super();
        this.state = {
            list: data,
            id: '',
            newList: [],
            price: '',
            name: [],
            total: 0,
            quantity: 0,
            clickable: false
        };
    }

    componentWillMount() {
        const hotel = window.location.href
        let result = hotel.slice(28,);
        const List = this.state.list.filter(function (rec) { return rec.name === result })
        this.setState({
            id: hotel,
            newList: List
        })
    }

    childHandler = (ChildPrice, ChildName, ChildQuantity) => {
        const names = this.state.name;
        names.push(ChildName);
        this.setState(
            {
                price: ChildPrice,
                name: names,
                quantity: ChildQuantity + 1,
                clickable: true
            }
        )
    };

    incrementQuantity = (incQuan) => {
        this.setState(
            {
                quantity: incQuan + 1

            }
        )
    };

    decrementQuantity = (decQuan) => {
        if (this.state.quantity >= 1) {
            this.setState(
                {
                    quantity: decQuan - 1

                }
            )
        }

    };

    total = (p, q) => {
        this.setState(
            {
                total: p * this.state.name.length
            }
        )
    }


    render() {
        return (
            <div className='w-full h-full m-10 bg-white'>
                <div id="content">
                    <div id="head">
                        <h1 className='hname'>{this.state.newList.map(x => x.name1)}</h1>
                        <h5 className='aname'><i class="fa fa-map-marker" style={{ fontSize: 18 }}></i> {this.state.newList.map(x => x.address)}</h5>
                        <div id='items'>
                            <center><h2>Order Now</h2></center>
                            <br />

                            {this.state.newList.map(
                                x => x.menu.map(item => <Menu
                                    id={item.id}
                                    desc={item.desc}
                                    price={item.price}
                                    name={item.name}
                                    action={this.childHandler} />)
                            )

                            }

                        </div>
                    </div>
                    <div id="panel">
                        <div id="logo">
                        </div>
                        <div id="right">
                            <div id="right-in">
                                <h4 className='text-gray-500 text-lg'>My Cart</h4>

                                {this.state.clickable &&
                                    <div>
                                        <MyCart
                                            name={this.state.name}
                                            price={this.state.price}
                                            quantity={this.state.quantity}
                                            increment={this.incrementQuantity}
                                            decrement={this.decrementQuantity}>
                                        </MyCart>
                                    </div>
                                }

                                <div id=" text-gray-500 text-lg">
                                    <p id=" text-gray-500 text-lg"> Total amount:
                                        <span className=" text-gray-500 text-lg">{'\u20B9'}  {this.state.total}</span>
                                    </p>
                                    <input id="pay" type="button" value="Calculate"
                                        onClick={() => this.total(this.state.price, this.state.quantity)} />
                                    <br />

                                    <Popup trigger=
                                        {<input id="pay" type="button" value="Pay Now" />}
                                        modal nested>
                                        {
                                            close => (
                                                <div className='modal'>
                                                    <div className='content'>
                                                        Please Pay th amount {this.state.total}
                                                    </div>
                                                    <div>
                                                        <Link to={{
                                                            pathname: `/hotels`
                                                        }}>
                                                         <input id="pay" onClick=
                                                            {() => close()} type="button" value="Pay Now" />
                                                        </Link>
                                                        
                                                    </div>
                                                    <div>
                                                        <input id="pay" onClick=
                                                            {() => close()} type="button" value="Close" />
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </Popup>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    };
}

export default Orders;