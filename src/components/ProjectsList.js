const ProjectsList = () => {
  const projects = [
    {
      id: 1,
      name: "Glyphwitch",
      url: "https://github.com/memphis-iis/glyphwitch",
      description: "Helps researchers annotate historical documents"
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