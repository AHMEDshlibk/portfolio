import Header from "../components/common/Header/Header";
import Home from "../pages/Home";
import Footer from "../components/common/Footer/Footer";

import { useSelector } from "react-redux";

const MainLayout = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default MainLayout;
