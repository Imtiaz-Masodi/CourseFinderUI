import Button from "./Button";

function Header() {
  return (
    <header className="lg:container w-screen h-16 my-4 bg-primary flex justify-between items-center px-10">
      <img
        src="/assets/images/kc-logo.png"
        className="h-8 bg-primary"
        alt="KC Overseas Logo"
      />
      <img
        src="/assets/svgs/ic_menu.svg"
        className="h-4 w-4 lg:hidden"
        alt="Menu"
      />
      <div className="hidden lg:flex justify-end items-center gap-9">
        <a href="#" className="text-white">
          Study Destinations
        </a>
        <a href="#" className="text-white">
          Services
        </a>
        <a href="#" className="text-white">
          Company
        </a>
        <a href="#" className="text-white">
          Upcoming Events
        </a>
        <Button variant="outline">Course Finder</Button>
      </div>
    </header>
  );
}

export default Header;
