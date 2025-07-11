import React from "react";
import { Button } from "@/components/ui/button";
import { User, Menu } from "lucide-react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header: React.FC = () => {
  return (
    <header className="w-full bg-white bg-opacity-80 shadow-sm">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center"> {/* Wrap logo in Link component */}
          <img
            src="/logo-maybank2u.jpg" // Path to the new logo image
            alt="Maybank2u Logo"
            className="h-8 md:h-10 w-auto" // Adjust height as needed, w-auto to maintain aspect ratio
          />
        </Link>

        {/* Navigation Links (Hidden on small screens) */}
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-700 hover:text-maybank-gold font-medium">PERSONAL</a>
          <a href="#" className="text-gray-700 hover:text-maybank-gold font-medium">BUSINESS</a>
          <a href="#" className="text-gray-700 hover:text-maybank-gold font-medium">FAQ</a>
        </nav>

        {/* Action Buttons and Icons */}
        <div className="flex items-center space-x-4">
          <Button className="bg-maybank-gold hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md hidden md:inline-flex">
            APPLY PRODUCTS ONLINE
          </Button>
          <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-100 px-4 py-2 rounded-md hidden md:inline-flex">
            REGISTER NOW
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-gray-700 hover:bg-gray-100 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;