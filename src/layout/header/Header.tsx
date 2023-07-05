import { ResponsiveLayout } from "..";
import HeaderDesktop from "./header-desktop/HeaderDesktop";
import HeaderMobile from "./header-mobile/HeaderMobile";

const Header = () => {
  return (
    <>
       <ResponsiveLayout media="desktop">
        <HeaderDesktop/>
      </ResponsiveLayout>
      <ResponsiveLayout media="mobile">
        <HeaderMobile/>
      </ResponsiveLayout>
    </>
  );
};

export default Header;
