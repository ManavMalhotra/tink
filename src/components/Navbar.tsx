import logo from "../assets/logo.svg";
const Navbar = () => {
  return (
    // align it in always center of the screen
    <div className="flex flex-col items-center justify-center  max-w-[10vw] mx-auto my-4 md:my-14">
      <img src={logo} className="w-auto h-full min-w-[20vw] rounded-full" alt="Logo" />
      <h2 className="my-2 text-sm font-normal md:text-lg whitespace-nowrap md:font-semibold md:my-4 md:tracking-wide ">
        New way to thinking is tinkering
      </h2>
    </div>
  );
};
export default Navbar;
