import { Link } from "react-router-dom";

function Header() {
  return (
    <div className=" bg-black text-white">
      <div className="container mx-auto p-5 flex items-center justify-between">
        <Link to="/">
          <h1 className=" text-xl font-inter">MOVIEVERSE</h1>
        </Link>

        <div className="flex justify-between space-x-4">
          <Link to="/movies">
            <p className="font-inter text-sm">MOVIES</p>
          </Link>

          <Link to="/shows">
            <p className="font-inter text-sm">TV/SHOWS</p>
          </Link>
          
        </div>
      </div>
    </div>
  );
}
export default Header;
