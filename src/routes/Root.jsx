import { Outlet } from "react-router-dom";
import Nav from "../components/nav/Nav";

const Root = () => {
    return (
        <div className="max-w-6xl m-auto">
          <Nav></Nav>
          <Outlet></Outlet>
        </div>
    );
};

export default Root;