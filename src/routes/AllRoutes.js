import { Routes, Route, Navigate } from "react-router-dom";
import {
  Home,
  ProductList,
  ProductDetail,
  Contact,
  Admin,
  PageNotFound,
  ContactIn,
  ContactEn,
  ContactUs,
} from "../pages";

export const AllRoutes = () => {
  const user = false;
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="Products" element={<ProductList />}></Route>
        <Route path="Product/:id" element={<ProductDetail />}></Route>
        <Route path="Contact" element={<Contact />}>
          <Route path="in" element={<ContactIn />} />
          <Route path="en" element={<ContactEn />} />
          <Route path="us" element={<ContactUs />} />
        </Route>
        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/" />}
        ></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
};
