function Projects() {
  return (
    <div className="dopokolorowania bg-zinc-800">
      <h1 className="text-lg font-extrabold text-red-700">My projects</h1>
      <div className="Project">
        <h2>TailwindCss Components For React</h2>
        <center>
          <img
            src="../src/assets/img//tailwind.png"
            className="w-56 h-1/2 p-2 hover:scale-110 transform transition duration-500 ease-in-out"
          ></img>
        </center>
        <p>
          Page with components to copy. The project is created using a
          collaborative github session
        </p>
      </div>
    </div>
  );
}
export default Projects;
