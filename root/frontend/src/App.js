import { SearchBox } from "./components/SearchBox";

import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export function App() {
  return (
    <>
      <SearchBox />
      <Outlet />
    </>
  )
}
