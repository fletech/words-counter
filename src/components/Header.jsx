import BackgroundImage from "./BackgroundImage";

export default function Header() {
  return (
    <header className="">
      <BackgroundImage />
      <h1 className="first-heading">
        Words <span className="first-heading--thin">Counter</span>
      </h1>
    </header>
  );
}
