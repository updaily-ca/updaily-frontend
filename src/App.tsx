import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import loadGoogleMapsAPI from "./utils/gMap";

// Component
import Header from "./components/global/Header/Header";
import Footer from "./components/global/Footer/Footer";

// Pages
import HomePage from "./pages/HomePage/HomePage";
import Register from "./pages/Register/Register";
// import ExplorePage from "./pages/ExplorePage/ExplorePage";
import DetailPage from "./pages/DetailPage/DetailPage";

// Apollo Client
import client from "./graphql/apolloClient";
import { ApolloProvider } from "@apollo/client";
import DevPage from "./pages/DevPage/DevPage";

interface LoadGoogleMapsAPIOptions {
  apiKey: string;
}

// Google Maps Context
const GoogleMapsContext = React.createContext<any>(null);

function GoogleMapsProvider({ children }: { children: React.ReactNode }) {
  const [googleMaps, setGoogleMaps] = useState<any>(null);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_1;
    if (apiKey) {
      const options: LoadGoogleMapsAPIOptions = {
        apiKey: apiKey,
      };

      loadGoogleMapsAPI(options).then((gMaps) => {
        setGoogleMaps(gMaps);
      });
    } else {
      console.error("Google Maps API key is missing. Please provide a valid API key.");
    }
  }, []);

  return (
    <GoogleMapsContext.Provider value={googleMaps}>
      {children}
    </GoogleMapsContext.Provider>
  );
}

function useGoogleMaps() {
  return React.useContext(GoogleMapsContext);
}

function App() {
  return (
    <ApolloProvider client={client}>
      <GoogleMapsProvider>
        <Router>
          {/* Header component */}
          <Header />

          {/* Define routes */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/devpage" element={<DevPage />} />
            {/* <Route path="/register/:type" element={<RegisterFormPage />} /> */}
            {/* <Route path="/explore" element={<ExplorePage />} /> */}
            <Route path="/detail" element={<DetailPage />} />
          </Routes>

          {/* Footer component */}
          <Footer />
        </Router>
      </GoogleMapsProvider>
    </ApolloProvider>
  );
}

export default App;
