function Header() {
  return (
    <div className="">
      <h1 className="text-neutral-300 text-5xl pb-4">Portfolio </h1>
      <div className="Links bg-neutral-700 pt-2 pb-2 rounded-3xl grid md:grid-cols-4 gap-2 md:flex-wrap md:">
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="hover:bg-slate-900">
            Home
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="hover:bg-slate-900">
            Projects
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="" className="">
            Contact
          </a>
        </div>
        <div className="col-span-1 hover:bg-slate-900 hover:rounded-full sm:row-span-1">
          <a href="">Download CV</a>
        </div>
      </div>
      <br></br>
      <br />
    </div>
  );
}
export default Header;
