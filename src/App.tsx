import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import loadGoogleMapsAPI from "./utils/gMap";

import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";

import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Register/Register";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import DetailPage from "./pages/DetailPage/DetailPage";
import DevPage from "./pages/DevPage/DevPage";
import ExplorePage from "./pages/ExplorePage/ExplorePage";
import Confirmation from "./pages/Confirmation/Confirmation";

import client from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";

const GoogleMapsContext = React.createContext<any>(null);

function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  const [googleMaps, setGoogleMaps] = useState<any>(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_1;
    if (apiKey) {
      const options = {
        apiKey: apiKey,
      };

      loadGoogleMapsAPI(options)
        .then((googleMaps) => {
          setGoogleMaps(googleMaps);
        })
        .catch((error) => {
          console.error("Error loading Google Maps API:", error);
        });
    } else {
      console.error("Google Maps API key is missing. Please provide a valid API key.");
    }
  }, []);

  return (
    <GoogleMapsContext.Provider value={googleMaps}>
      {googleMaps ? ( // Render children only if Google Maps is loaded
        children
      ) : (
        <div>Loading Google Maps...</div>
      )}
    </GoogleMapsContext.Provider>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <GoogleMapsProvider>
        <Router>
          <Header />

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/devpage" element={<DevPage />} />
            <Route path="/register/:type" element={<RegisterFormPage />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/explore" element={<ExplorePage />} />
            <Route path="/detail" element={<DetailPage />} />
          </Routes>

          <Footer />
        </Router>
      </GoogleMapsProvider>
    </ApolloProvider>
  );
}

export default App;
