import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <h1>SOMETHING WENT WRONG....</h1>
      <Link to="/home">Home</Link>
    </>
  );
}
