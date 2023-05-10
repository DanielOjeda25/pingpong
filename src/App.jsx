import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [coordenada, setCordenada] = useState({
		lat: -27.366667,
		lon: -55.896944,
	});
	const [datosTipoA, setDatosTipoA] = useState([]);
	const [datosTipoB, setDatosTipoB] = useState([]);
	useEffect(() => {
		const socket = new WebSocket("ws://192.168.10.107:8080");

		socket.addEventListener("message", (event) => {
			const data = JSON.parse(event.data);
			//console.log(data);

			if (data.message === "suscripcion") {
				setDatosTipoA([...datosTipoA, data]);
			} else if (data.idSocket === "8700002") {
				setDatosTipoB([...datosTipoB, data]);
			}
			/* const toNumberLat = data.data.lat.replace(",", ".");
			const toNumberLon = data.data.lon.replace(",", ".");
			const lat = parseFloat(toNumberLat);
			const lon = parseFloat(toNumberLon);
			setCordenada({ lat, lon }); */
		});

		return () => {
			socket.close();
		};
	}, []);
	const position = [coordenada.lat, coordenada.lon];

	return (
		<>
			<div style={{ width: "500px" }}>
				<p>Datos A:{datosTipoA.message}</p>
				<p>Datos B:{datosTipoB.ok}</p>
			</div>
		</>
	);
}

export default App;
