import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import "./App.css"
import loadGoogleMapsAPI from "./utils/gMap"

// Component
import Header from "./components/global/Header/Header"
import Footer from "./components/global/Footer/Footer"

// Pages
import HomePage from "./pages/HomePage/HomePage"
import Register from "./pages/Register/Register"
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage"
import DetailPage from "./pages/DetailPage/DetailPage"

// Apollo Client
import client from "./graphql/apolloClient"
import { ApolloProvider } from "@apollo/client"

interface LoadGoogleMapsAPIOptions {
  apiKey: string
}

function App() {
  const [googleMaps, setGoogleMaps] = useState<any>(null);
  // Load Google Maps API when the app starts
  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY_1 // Get your API key from environment variables
    if (apiKey) {
      const options: LoadGoogleMapsAPIOptions = {
        apiKey: apiKey,
      }

      loadGoogleMapsAPI(options)
    } else {
      console.error("Google Maps API key is missing. Please provide a valid API key.")
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <Router>
        {/* Header component */}
        <Header />

        {/* Define routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/register/:type" element={<RegisterFormPage googleMaps={googleMaps} />} />
          {/* <Route path="/explore" element={<ExplorePage />} /> */}
          <Route path="/detail" element={<DetailPage />} />
        </Routes>

        {/* Footer component */}
        <Footer />
      </Router>
    </ApolloProvider>
  )
}

export default App
