const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      name: "Glyphwitch",
      url: "https://github.com/memphis-iis/glyphwitch",
      description: "Annotate, transcribe, and explore historical documents for research, education, and preservation."
    },
    {
      id: 2,
      name: "The Finance Tracker",
      url: "https://github.com/jackSeigerman/Finance-Tracker",
      description: "Managing your finances never looked so good."
    }
    // Adding more projects here
  ];

  return (
    <ul className="postlist">
      {projects.map(project => (
        <li key={project.id}>
          <a href={project.url}>{project.name}</a>
          <span className="postlist__date">{project.description}</span>
        </li>
      ))}
    </ul>
  );
};

export default ProjectsList;