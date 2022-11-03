import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";

// pages
import GoogleAuthPage from "./pages/GoogleAuthPage";
import RestaurantPage from "./pages/RestaurantPage";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
// components
import Overview from "./components/Restaurant/Overview";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews";
import Menu from "./components/Restaurant/Menu";
import Photos from "./components/Restaurant/Photos";
import RestaurantLayout from "./layouts/RestaurantLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/:type" element={<HomePage />} />
        {/* <Route path="/restaurant/:id" element={<RedirectRestaurant />} /> */}
        <Route path="/google/:token" element={<GoogleAuthPage />} />
        <Route
          path="/restaurant/:id"
          element={
            <RestaurantLayout>
              <RestaurantPage />
            </RestaurantLayout>
          }
        >
          <Route path="overview" element={<Overview />} />
          <Route path="order-online" element={<OrderOnline />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="menu" element={<Menu />} />
          <Route path="photos" element={<Photos />} />
        </Route>
        <Route path="/checkout/orders" element={<CheckoutPage />} />
      </Routes>
    </>
  );
}

export default App;
