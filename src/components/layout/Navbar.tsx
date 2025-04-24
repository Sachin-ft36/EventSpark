import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";  // Changed from CalendarPlus to Flame

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-white shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container-padding mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <Flame className="h-6 w-6 text-white" />
            </div>
            <span className="font-poppins font-bold text-xl text-gray-900">
              EventSpark
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Home
            </Link>
            <Link
              to="/timeline"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Events
            </Link>
            <Link
              to="/dashboard"
              className="text-gray-700 hover:text-primary-600 font-medium"
            >
              Dashboard
            </Link>
            <Button asChild variant="ghost">
              <Link to="/create-event">Create Event</Link>
            </Button>
            <Button asChild>
              <Link to="/dashboard">Sign In</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/timeline"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Events
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                to="/create-event"
                className="text-gray-700 hover:text-primary-600 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Create Event
              </Link>
              <Button asChild className="w-full">
                <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
