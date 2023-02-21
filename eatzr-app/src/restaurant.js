import './App.css';
import './index.css';
import eatzRLogo from './data/eatzr1.png';
import headerLogo from './data/eatzr2.png';
import React from 'react';
import ReactDOM from 'react-dom/client';

const confirmOrder = (Order) => {
  
  const myElement =
   <div>
    <table className="center">
      <tbody>
        <th><tr><td>Order Details</td></tr></th>
        <tr>
          <td>Order ID : {Order.OrderNumber} </td>
        </tr>
        <tr>
          <td>Customer : {Order.custName} </td>
        </tr>
        <tr>
          <td>Train : {Order.Train} </td>
        </tr>      
        <tr>
          <td>Coach : {Order.Coach} </td>
        </tr>        
        <tr>
          <td>Seat : {Order.Seat} </td>
        </tr>        
        <tr>
          <td><button className="button1" type="submit">Accept Order</button></td>
          <td><button className="button1" type="submit">Reject Order</button></td>
        </tr>        
      </tbody>
    </table>
  </div>;
   
  const root = ReactDOM.createRoot(document.getElementById('View_section'));
  root.render(myElement);

}


const editMenu = (product) => {
  const availability="No"
  if (product.available)
   availability = "Yes"

  const myElement =
   <div>
    <table className="center">
      <tbody>
        <th><tr>Menu details</tr></th>
        <tr>
          <td>Item ID : {product.ID} </td>
        </tr>
        <tr>
          <td>Name : {product.name} </td>
        </tr>
        <tr>
          <td> <input value={product.price} border="2px"></input> </td>
        </tr>      
        <tr>
          <td>Available : {availability} </td>
          <td></td>
        </tr>                
        <tr>
          <td><button className="button1" type="submit">Save Details</button></td>
          <td><button className="button1" type="submit">Remove from Menu</button></td>
        </tr>        
      </tbody>
    </table>
  </div>;
   
  const root = ReactDOM.createRoot(document.getElementById('View_section'));
  root.render(myElement);

}


function OrderRows({ Order }) {
  return (
    <tr>
      <td><a onClick= {() =>confirmOrder (Order)} href="#View_section" key={Order.OrderNumber.toString()} target="_self" rel="noreferrer">{Order.OrderNumber}</a></td>
      <td>{Order.status}</td>
    </tr>
  );
}

function MenuRows({ product }) {


  return (
    <tr>
      <td><a onClick = {() =>editMenu (product)} href="#View_section" key={product.ID.toString()} target="_self" rel="noreferrer">{product.name}</a></td>
      <td>{product.price}</td>
    </tr>
  );
}

function OrderTable({ orders }) {
  const OrderRow = [];

  orders.forEach((order) => {
    OrderRow.push(<OrderRows Order={order} key={order.OrderNumber} />);

  });

  return (
    <table className="center">
      <thead>
        <tr>
          <th>Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>{OrderRow}</tbody>
    </table>
  );


}
function MenuTable({ menuitems }) {
  const MenuRow = [];

  menuitems.forEach((menuitem) => {
    MenuRow.push(<MenuRows product={menuitem} key={menuitem.name} />);

  });

  return (
    <table className="center">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{MenuRow}</tbody>
    </table>
  );

}

function Summarydata({ Ordersummary }) {


 const ordStat = (Ordersummary.OrderCount == 0) ? "No Orders ":Ordersummary.OrderCount
  return (<div>{Ordersummary.orderstatus+':'} {ordStat}</div>);
}

function Summaryview({ orders }) {
  const Views = [];

  orders.forEach((order) => {
    Views.push(<Summarydata Ordersummary={order} key={order.orderstatus} />);

  });

  return (
    Views
  );

}

function Summary({OrderSummary}) {

  return (
  <>
  <div className="wrapper">
    <Summaryview orders={OrderSummary} />
    
  </div>
  </>

  );

}

  function Dashboard({ Orders, Menu }) {
    return (
      <>
        <div className="flex-container">
        <div className="flex-item-left" >Order Management
          <OrderTable orders={Orders} />
        </div>
        <div className="flex-item-right">Menu Management
          <MenuTable menuitems={Menu} />
        </div>
      </div></>
    );
  }


const MENU  = [
  { ID: "1", price: "INR 10", available: true, name: "Idli"},
  { ID: "2", price: "INR 20", available: true, name: "Dosa"},
  { ID: "3", price: "INR 10", available: false, name: "Vada"},
  { ID: "4", price: "INR 5", available: true, name: "Coffee"},
  { ID: "5", price: "INR 5", available: false, name: "Tea"},
  { ID: "6", price: "INR 4", available: true, name: "Horlicks"}
];

const ORDERS  = [
  { OrderNumber: "EatzrOrder1", status: "PendingConfirmation", custName: "Arun", Train: "Shatabdi Express", Coach: "C2", Seat: "10"},
  { OrderNumber: "EatzrOrder2", status: "PendingConfirmation", custName: "Sakthi", Train: "Shatabdi Express", Coach: "C2", Seat: "15"},
  { OrderNumber: "EatzrOrder3", status: "PendingConfirmation", custName: "Rahul", Train: "Shatabdi Express", Coach: "C2", Seat: "7"},
  { OrderNumber: "EatzrOrder4", status: "PendingConfirmation", custName: "Sid", Train: "Shatabdi Express", Coach: "C3", Seat: "10"},
  { OrderNumber: "EatzrOrder5", status: "PendingConfirmation", custName: "Rias", Train: "Shatabdi Express", Coach: "C1", Seat: "10"},
  { OrderNumber: "EatzrOrder6", status: "PendingConfirmation", custName: "Aathmica", Train: "Shatabdi Express", Coach: "C4", Seat: "10"}
];

const ORDERSUMMARY = [
  { OrderCount: "6", orderstatus: "Pending Confirmation"},
  { OrderCount: "10", orderstatus: "Confirmed"},
  { OrderCount: "15", orderstatus: "Delivered"},
  { OrderCount: "0", orderstatus: "Rejected"},
  { OrderCount: "15", orderstatus: "Pending Delivery"},
];



export default function Restaurant() {
  return (
    <><div className="row">
      <div className="column1">
        <div className="topnav">
          <a href="www.eatzR.com">Home</a>
          <a href="/main/login.html">Account</a>
          <a href="/main/download.html">Download</a>
        </div>
      </div>
      <div className="column2">
        <div><p>Why stay hungry when you can get food right at your seat?!</p><p>Welcome to EatzR!</p></div>
      </div>
      <div className="column2">
        <img src={eatzRLogo} className="App-logo" alt="logo"></img>
      </div>
      <div className="column3">
        <img src={headerLogo} className="App-logo1" alt="logo1"></img>
      </div>
    </div>
    <Summary OrderSummary={ORDERSUMMARY}/>
    <Dashboard Orders={ORDERS} Menu={MENU}/>
    <div id="View_section" ></div></>
    )
  }