
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page-container not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        Sorry, the page you are looking for does not exist.
      </p>

      <Link to="/" className="home-button">
        Return Home
      </Link>
    </main>
  );
}

export default NotFound;