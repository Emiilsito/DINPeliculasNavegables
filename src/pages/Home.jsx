import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="space-y-6 text-center">
			<h1 className="text-3xl font-bold">Bienvenido a Películas Navegables</h1>
			<p className="text-gray-600">Explora nuestras colecciones de películas e intérpretes.</p>

			<div className="flex items-center justify-center gap-4">
				<Link to="/peliculas" className="px-4 py-2 bg-blue-600 text-white rounded">Ver Películas</Link>
				<Link to="/interpretes" className="px-4 py-2 bg-green-600 text-white rounded">Ver Intérpretes</Link>
			</div>
		</div>
	);
}

export default Home;

