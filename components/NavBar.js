import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="parent">
      <Link href={"/"} className="link">
        <li>Main Page</li>
      </Link>
      <Link href={"/one"} className="link">
        <li>Page One</li>
      </Link>
      <Link href={"/two"} className="link">
        <li>Page Two</li>
      </Link>
      <Link href={"/three"} className="link">
        <li>Page Three</li>
      </Link>
      <Link href={"/four"} className="link">
        <li>Page Four</li>
      </Link>
    </ul>
  );
};

export default NavBar;
