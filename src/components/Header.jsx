import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mr. N. Ganapathiram</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="hover:text-blue-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/education" className="hover:text-blue-300">
                Education
              </Link>
            </li>
            <li>
              <Link to="/experience" className="hover:text-blue-300">
                Experience
              </Link>
            </li>
            <li>
              <Link to="/awards" className="hover:text-blue-300">
                Awards
              </Link>
            </li>
            <li>
              <Link to="/publications" className="hover:text-blue-300">
                Publications
              </Link>
            </li>

            <li>
              <Link
                to="/conferencePresentations"
                className="hover:text-blue-300"
              >
                ConferencePresentations
              </Link>
            </li>
            <li>
              <Link to="/areaOfInterest" className="hover:text-blue-300">
                AreaOfInterest
              </Link>
            </li>
            <li>
              <Link to="/personalProfile" className="hover:text-blue-300">
                PersonalProfile
              </Link>
            </li>
            <li>
              <Link
                to="/rolesAndResponsibilities"
                className="hover:text-blue-300"
              >
                RolesAndResponsibilities
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
