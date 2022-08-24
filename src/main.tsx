import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { store } from './Store/store';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<ChakraProvider>
		<BrowserRouter>
		<Provider store={ store } >
			<App />
		</Provider>
		</BrowserRouter>
	</ChakraProvider>
);
