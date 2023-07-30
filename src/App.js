import './App.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src="https://i.pinimg.com/originals/02/fd/5c/02fd5cc15841730936c0c5c555dae3a9.png" alt="" />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  return (
    <div className='res-card'>
      <img className='res-logo' src="https://khni.kerry.com/wp-content/uploads/2019/02/Restaurant-meal.jpg" alt="Loading" />
      <h3>{props.resName}</h3>
      <h4>{props.cuisine}</h4>
      <h4>4.5 stars</h4>
      <h4>30 minutes</h4>
    </div>
  )
}




const Body = () => {
  return (
    <div className='body'>
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resName="Food % Foods" cuisine="North Thali" />
        <RestaurantCard resName="KFC" cuisine="South Thali" />
      </div>
    </div >
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
