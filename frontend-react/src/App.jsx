import Navbar from './Navbar.jsx';
import Footer from './Footer.jsx';

function App() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-10 flex flex-col gap-10">
      <Navbar />
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* Tarjeta 1 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=300&fit=crop" className="rounded-lg" />
          <h3 className="font-bold text-Lg">Mouse Inalambrico</h3>
          <p className="text-texto-dim text-sm">Mouse ergonomico, conexion Bluetooth</p>
          <p className="text-verde font-extrabold">$89.900</p>

          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-verde hover:text-white">
            Ver más detalles
          </button>
        </div>

        {/* Tarjeta 2 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1794278383410-6bb5d15f6976?w=400&h=300&fit=crop" className="rounded-Lg" />
          <h3 className="font-bold text-Lg">Teclado Mecanico</h3>
          <p className="text-texto-dim text-sm">Switches azules, retroiluminado RGB</p>
          <p className="text-verde font-extrabold">$149.900</p>

          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-verde hover:text-white">
            Ver más detalles
          </button>
        </div>

        {/* Tarjeta 3 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCReut114mwjBdwpU8E-0gAgP-BC-1zPkSWN2-W2uSw&s=10?w=400&h=300&fit=crop" className="rounded-Lg" />
          <h3 className="font-bold text-Lg">Monitor 24"</h3>
          <p className="text-texto-dim text-sm">Full HD, 75Hz, panel IPS</p>
          <p className="text-verde font-extrabold">$899.900</p>

          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-verde hover:text-white">
            Ver más detalles
          </button>
        </div>

        {/* Tarjeta 4 */}
        <div className="flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white">
          <img src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop" className="rounded-Lg" />
          <h3 className="fond-bold texr-lg">Audifnos Bluetooth</h3>
          <p className="text-texto-dim text-sm">Cancion de ruido, 20h de bateria</p>
          <p className="text-verde font-extrabold">$199.900</p>

          <button className="bg-transparent text-verde border-2 border-verde py-3 px-6 rounded-xl font-bold hover:bg-verde hover:text-white">
            Ver más detalles
          </button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default App