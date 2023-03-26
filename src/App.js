import React from 'react';
import './App.css';
import Navbar from './components/newNavbar';
import Banner from './components/Banner';
import About from './components/About';
import Today from './components/TodaySpecial';
import Todaycarousel from './components/Todaycarousel';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages';
// import About from './pages/about';
// import Events from './pages/events';
// import AnnualReport from './pages/annual';
// import Teams from './pages/team';
// import Blogs from './pages/blogs';
// import SignUp from './pages/signup';

function App() {
return (
	<Router>
	<Navbar />
	<Banner></Banner>
	<About></About>
	<Today></Today>
	{/* <Todaycarousel></Todaycarousel> */}

	{/* <Routes> */}
		{/* <Route path='/' component={Banner} /> */}
		{/* <Route path='/about' component={About} /> */}
		{/* <Route path='/events' component={Events} />
		<Route path='/annual' component={AnnualReport} />
		<Route path='/team' component={Teams} />
		<Route path='/blogs' component={Blogs} />
		<Route path='/sign-up' component={SignUp} /> */}
	{/* </Routes> */}
	</Router>
);
}

export default App;
