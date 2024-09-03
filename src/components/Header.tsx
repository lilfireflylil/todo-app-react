import Counter from "./Counter";
import Logo from "./Logo";

function Header() {
  return (
    <header className="col-[1/3] row-[1/2] flex items-center justify-between border-b border-white/[0.08] bg-[#e0e0e0] px-7">
      <Logo />
      <Counter />
    </header>
  );
}

export default Header;
