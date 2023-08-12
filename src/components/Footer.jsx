import Summary from "./Summary";
import Timer from "./Timer";

function Footer() {
  return (
    <footer className="w-full max-w-[1000px] mx-auto px-4 py-1 flex flex-wrap items-end justify-between text-xs">
      <Summary />
      <Timer />
    </footer>
  );
}

export default Footer;
