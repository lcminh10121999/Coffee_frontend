import { BrowserRouter as Router, Route, Link, Routes, } from "react-router-dom";
import ScrollToTop from "./Handle/ScrollToTop";
import AboutUs from "./Screens/AboutUs";
import AddCategoryAdmin from "./Screens/Admin/AddCategoryAdmin";
import AddProductAdmin from "./Screens/Admin/AddProductAdmin";
import CategoryList from "./Screens/Admin/CategoryList";
import ProductList from "./Screens/Admin/ProductList";
import SizeTopinList from "./Screens/Admin/SizeTopinList";
import UsersList from "./Screens/Admin/Users";
import CartHome from "./Screens/Cart";
import CheckOut from "./Screens/CheckOut";
import HomeScreen from "./Screens/HomeScreen";
import Login from "./Screens/Login";
import Menu from "./Screens/menu";
import News from "./Screens/news";
import NewsDetail from "./Screens/NewsDetail";
import NotFoundPage from "./Screens/NotFoundPage";
import ProductDetail from "./Screens/ProductDetail";
import Profile from "./Screens/Profile";
import UserAddress from "./Screens/UserAddress";
import UserHistory from "./Screens/UserHistory";
import UserProfile from "./Screens/UserProfile";
function App() {
  return (
    <ScrollToTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/product" element={<Menu />} />
        <Route path="/product/:id/:name" element={<ProductDetail />}></Route>
        <Route path="/cart" element={<CartHome />}></Route>
        <Route path="/checkout" element={<CheckOut />}></Route>
        <Route path="/news" element={<News />} />
        <Route path="/news/:id/:name" element={<NewsDetail />} />
        <Route path="/user-info" >
          <Route path="profile" element={<Profile />}></Route>
          <Route path="history" element={<UserHistory />}></Route>
          <Route path="user-address" element={<UserAddress />}></Route>
        </Route>
        <Route path="/admin">

          <Route index element={<ProductList />} />
          <Route path="login" element={<Login />}></Route>
          <Route path="product">
            <Route index element={<ProductList />} />
            <Route path="list" element={<ProductList />} />
            <Route path="create" element={<AddProductAdmin />} />
          </Route>
          <Route path="category">
            <Route index element={<CategoryList />} />
            <Route path="list" element={<CategoryList />} />
            <Route path="create" element={<AddCategoryAdmin />} />
          </Route>
          <Route path="users">
            <Route index element={<UsersList />} />
            <Route path="list" element={<UsersList />} />
          </Route>
          <Route path="topping-size">
            <Route index element={<SizeTopinList />} />
            <Route path="list" element={<SizeTopinList />} />
          </Route>
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </ScrollToTop>

  );
}

export default App;
