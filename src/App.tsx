import { Outlet } from "react-router";
import SearchHeader from "./components/SearchHeader";

export default function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
