import { Container, Heading } from "@chakra-ui/react";
import Allroutes from "./AllRoutes/Allroutes";
import Footer from "./Components/ForFooter/Footer";
import Navbar from "./Components/ForNavbar/Navbar";
import UseCase from "./Pages/day1/ForUseCase/UseCasePage";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Allroutes />
			<Footer />
		</div>
	);
}

export default App;
// chakra - done
// axios redux react-redux react-router-dom@6 redux thunk
