import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart, Dog, Home, Mail, Bone } from "lucide-react";
import "./App.css";

// Products Data
const products = {
  dogs: [
    {
      id: 1,
      name: "Golden Retriever",
      category: "Dog",
      price: 799,
      image: "home.png",
    },
    {
      id: 2,
      name: "German Shepherd",
      category: "Dog",
      price: 799,
      image: "german.png",
    },
    {
      id: 3,
      name: "Bulldog",
      category: "Dog",
      price: 799,
      image: "https://images.dog.ceo/breeds/bulldog-english/murphy.jpg",
    },
  ],
  toys: [
    {
      id: 101,
      name: "Squeaky Bone",
      category: "Toy",
      price: 12,
      image: "bonr.png",
    },
    {
      id: 102,
      name: "Rope Tug",
      category: "Toy",
      price: 15,
      image: "",
    },
  ],
  food: [
    {
      id: 201,
      name: "Pedigree",
      category: "Food",
      price: 45,
      image: "pedigree.png",
    },
    {
      id: 202,
      name: "Organic Blend",
      category: "Food",
      price: 55,
      image: "",
    },
  ],
};

const dogBreeds = [
  {
    id: 1,
    name: "Golden Retriever",
    origin: "Scotland",
    temperament: "Friendly, Intelligent",
    image: "home.png",
  },
  {
    id: 2,
    name: "German Shepherd",
    origin: "Germany",
    temperament: "Confident, Courageous",
    image: "german.png",
  },
  {
    id: 3,
    name: "Bulldog",
    origin: "England",
    temperament: "Docile, Friendly",
    image: "https://images.dog.ceo/breeds/bulldog-english/murphy.jpg",
  },
];

// Shared Components
const Navbar = ({ cart, setShowCart }) => (
  <nav
    className="navbar navbar-expand-lg navbar-light"
    style={{
      backgroundColor: "#FFA07A",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}
  >
    <div className="container">
      <Link
        to="/"
        className="navbar-brand"
        style={{
          fontWeight: "bold",
          color: "white",
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
        }}
      >
        <Dog size={40} color="white" /> Pawsome Pals
      </Link>
      <div className="d-flex align-items-center">
        <Link to="/cart" className="btn position-relative me-3">
          <ShoppingCart color="#FFFFFF" />
          <span className="badge bg-danger position-absolute top-0 start-100 translate-middle">
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </Link>
        <div className="navbar-nav">
          <Link to="/" className="nav-item nav-link text-white me-2">
            <Home size={20} /> Home
          </Link>
          <Link to="/breeds" className="nav-item nav-link text-white me-2">
            <Dog size={20} /> Breeds
          </Link>
          <Link to="/contact" className="nav-item nav-link text-white">
            <Mail size={20} /> Contact
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

// Pages
const HomePage = ({ addToCart }) => (
  <div className="container py-5">
    {/* Welcome Section */}
    <section className="text-center mb-5">
      <h1
        className="display-4"
        style={{ color: "#FF4500", fontWeight: "bold" }}
      >
        Welcome to Pawsome Pals! 🐾
      </h1>
      <p className="lead" style={{ color: "#555" }}>
        Your one-stop shop for happy tails and wagging hearts. Explore our wide
        selection of adorable dogs, fun toys, and nutritious food to make your
        furry friend’s life amazing!
      </p>
      <img
        src="home.png"
        alt="Happy dog"
        style={{
          width: "100%",
          maxHeight: "500px",
          objectFit: "cover",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        }}
      />
    </section>

    {/* Why Choose Us */}
    <section className="text-center mb-5">
      <h2 style={{ color: "#FF6347", fontWeight: "bold" }}>Why Choose Us?</h2>
      <div className="row mt-4">
        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/616/616492.png"
            alt="Quality"
            style={{ width: "80px", marginBottom: "15px" }}
          />
          <h5>Top Quality</h5>
          <p>
            We ensure the highest standards for all our products, so your pets
            get only the best.
          </p>
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1048/1048966.png"
            alt="Affordable"
            style={{ width: "80px", marginBottom: "15px" }}
          />
          <h5>Affordable Prices</h5>
          <p>Enjoy premium products and services without breaking the bank.</p>
        </div>
        <div className="col-md-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/1491/1491433.png"
            alt="Support"
            style={{ width: "80px", marginBottom: "15px" }}
          />
          <h5>Friendly Support</h5>
          <p>
            Our team is here to help with all your queries and concerns,
            ensuring a pawsitive experience!
          </p>
        </div>
      </div>
    </section>

    {/* Shop Section */}
    <section>
      <h2 className="text-center mb-4" style={{ color: "#FF6347" }}>
        Our Products
      </h2>

      {/* Dogs Section */}
      <div className="mb-5">
        <h3>Available Dogs</h3>
        <div className="row">
          {products.dogs.map((dog) => (
            <div key={dog.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={dog.image}
                  className="card-img-top"
                  alt={dog.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{dog.name}</h5>
                  <p>${dog.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(dog)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Toys Section */}
      <div className="mb-5">
        <h3>Dog Toys</h3>
        <div className="row">
          {products.toys.map((toy) => (
            <div key={toy.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={toy.image}
                  className="card-img-top"
                  alt={toy.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{toy.name}</h5>
                  <p>${toy.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(toy)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Food Section */}
      <div>
        <h3>Dog Food</h3>
        <div className="row">
          {products.food.map((food) => (
            <div key={food.id} className="col-md-4 mb-3">
              <div className="card">
                <img
                  src={food.image}
                  className="card-img-top"
                  alt={food.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5>{food.name}</h5>
                  <p>${food.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => addToCart(food)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

const BreedsPage = () => (
  <div className="container py-5">
    <h2 className="text-center mb-4" style={{ color: "#FF6347" }}>
      Dog Breeds
    </h2>
    <div className="row">
      {dogBreeds.map((breed) => (
        <div key={breed.id} className="col-md-4 mb-4">
          <div className="card">
            <img
              src={breed.image}
              className="card-img-top"
              alt={breed.name}
              style={{ height: "250px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5>{breed.name}</h5>
              <p>
                <strong>Origin:</strong> {breed.origin}
              </p>
              <p>
                <strong>Temperament:</strong> {breed.temperament}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");

    console.log(formData);
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center mb-4" style={{ color: "#FF6347" }}>
                Contact Us
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CartPage = ({ cart, removeFromCart, updateQuantity }) => {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4" style={{ color: "#FF6347" }}>
        Your Cart
      </h2>
      {cart.length === 0 ? (
        <div className="text-center">
          <Bone size={100} color="#FFA07A" />
          <p className="mt-3">Your cart is empty!</p>
        </div>
      ) : (
        <div className="row justify-content-center">
          <div className="col-md-8">
            {cart.map((item) => (
              <div key={item.id} className="card mb-3">
                <div className="card-body d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                      marginRight: "15px",
                    }}
                  />
                  <div className="flex-grow-1">
                    <h5>{item.name}</h5>
                    <p>${item.price} each</p>
                  </div>
                  <div className="d-flex align-items-center">
                    <button
                      className="btn btn-outline-secondary btn-sm me-2"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      className="btn btn-outline-secondary btn-sm ms-2 me-2"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <div className="ms-3">
                    <strong>${item.price * item.quantity}</strong>
                  </div>
                </div>
              </div>
            ))}
            <div className="text-end">
              <h4>Total: ${calculateTotal()}</h4>
              <button className="btn btn-primary">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Main App Component
const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <Router>
      <div
        style={{
          fontFamily: "'Comic Sans MS', cursive",
          background: "linear-gradient(135deg, #FFE5B4, #FFF5EE)",
          minHeight: "100vh",
        }}
      >
        <Navbar cart={cart} />

        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/breeds" element={<BreedsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/cart"
            element={
              <CartPage
                cart={cart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <p className="mb-0">
            © 2024 Pawsome Pals | Bringing Joy, One Puppy at a Time! 🐾
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
