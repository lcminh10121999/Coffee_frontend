import { BrowserRouter as Router, Route, Link, Routes, Navigate, } from "react-router-dom";
import { ROUTER_URL } from "./data/ruotersUrl";
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
import SearchPage from "./Screens/searchPage";
import CheckoutSuccess from "./Screens/CheckoutSuccess";
// import "moment/locate/vi";

function App() {
  const url = ROUTER_URL;
  return (
    <ScrollToTop>
      <Routes>
        <Route path={url.home} element={<HomeScreen />} />
        <Route path={url.about_us} element={<AboutUs />} />
        <Route path={url.login} element={<Login />}></Route>
        <Route path="*" element={<NotFoundPage />} />
        <Route path={url.product} element={<Menu />} />
        <Route path="/product/:name" element={<ProductDetail />}></Route>
        <Route path={url.cart} element={<CartHome />}></Route>
        <Route path={url.checkout} element={<CheckOut />}></Route>
        <Route path={url.new} element={<News />} />
        <Route path="/news/:id/:name" element={<NewsDetail />} />
        <Route path={url.profile} element={<Profile />}></Route>
        <Route path={url.history} element={<UserHistory />}></Route>
        <Route path={url.address} element={<UserAddress />}></Route>
        <Route path={url.searchPage} element={<SearchPage />}></Route>
        <Route path={url.user_info} element={<Navigate to="/user-info/profile" replace />} >

          {/* <Route path="history" element={<UserHistory />}></Route>
          <Route path="user-address" element={<UserAddress />}></Route> */}
        </Route>
        <Route path={url.checkout_success} element={<CheckoutSuccess />}></Route>
        {/* admin */}
        <Route path={url.admin} element={<Navigate to="/admin/product/list" replace />} ></Route>
        <Route path={url.admin_login} element={<Login />}></Route>
        <Route path={url.admin_product} element={<Navigate to="/admin/product/list" replace />} ></Route>
        <Route path={url.admin_product_list} element={<ProductList />} />
        <Route path={url.admin_product_create} element={<AddProductAdmin />} />
        <Route path={url.admin_category} element={<Navigate to="/admin/category/list" replace />} ></Route>
        <Route path={url.admin_category_list} element={<CategoryList />} />
        <Route path={url.admin_category_create} element={<AddCategoryAdmin />} />
        <Route path={url.admin_users} element={<Navigate to="/admin/users/list" replace />} ></Route>
        <Route path={url.admin_users_list} element={<UsersList />} />
        <Route path={url.admin_topping_size} element={<Navigate to="/admin/topping-size/list" replace />} ></Route>
        <Route path={url.admin_topping_size_list} element={<SizeTopinList />} />
        {/* <Route path="/admin" >
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
        </Route> */}
      </Routes>
    </ScrollToTop>

  );
}

export default App;
