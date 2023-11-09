import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    // align it in always center of the screen
    <div className="flex flex-col items-center justify-center  max-w-[10vw] mx-auto my-2 md:my-8">
      <img src={logo} className="" alt="Logo" />
      <h2 className="my-2 text-sm font-normal md:text-lg whitespace-nowrap md:font-semibold md:my-4 md:tracking-wide ">
        New way to thinking is tinkering
      </h2>
    </div>
  );
};
export default Navbar;
