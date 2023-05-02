import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <>
      <Link to="/login">로그인</Link>
      <Link to="/">Home</Link>
    </>
  );
};
export default Nav;
