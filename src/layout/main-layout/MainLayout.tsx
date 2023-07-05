import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default MainLayout;
