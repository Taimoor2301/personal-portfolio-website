import Navbar from "./Components/Navbar";
import Hero from "./pages/Hero";
import svg2 from "./assets/Backgrounds/bg2.svg";
import About from "./pages/About";
import MySkills from "./pages/MySkills";

const App = () => {
	return (
		<div className=' text-white bg-darkP'>
			<Hero />
			<About />
			<MySkills />
		</div>
	);
};

export default App;
