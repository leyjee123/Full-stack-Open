const Header = (props) => {
  console.log("Hello From Header");
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};
export default Header;
