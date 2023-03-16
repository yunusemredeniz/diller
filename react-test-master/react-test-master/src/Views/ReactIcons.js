import { FaHeart } from "react-icons/fa";

function ReactIcons() {
  return (
    <main>
      <ul className="icons">
        <li>
          <FaHeart style={{ color: "orange" }} />
        </li>
        <li>
          <FaHeart style={{ color: "red" }} />
        </li>
      </ul>
    </main>
  );
}

export default ReactIcons;
