export default function Navbar() {
    return (
      <nav className="absolute top-0 w-full flex justify-between items-center p-6 bg-transparent text-white z-50">
        <div className="text-2xl font-bold">Let’s Travels</div>
        <ul className="flex space-x-6">
          <li><a href="#home" className="hover:text-gray-300">Home</a></li>
          <li><a href="#beaches" className="hover:text-gray-300">Beaches</a></li>
          <li><a href="#map" className="hover:text-gray-300">About Us</a></li>
          <li><a href="#contact" className="hover:text-gray-300">Contact</a></li>
        </ul>
        <div className="text-right">
          <p>📞 081 853 4183</p>
          <p>✉️ contact@letstravels.com</p>
        </div>
      </nav>
    );
  }
  