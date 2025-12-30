import Navbar from "./Navbar";
import TopOfferBar from "./TopOfferBar";

const Header = () => {
  return (
    <>
      {/* FIXED HEADER */}
      <div className="fixed top-0 left-0 w-full z-50">
        <TopOfferBar />
        <Navbar />
      </div>

      {/* SPACER (prevents overlap) */}
      <div className="h-[107px]" />
    </>
  );
};

export default Header;
