import { projects } from '../data/projects';

const Projects = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-3">Side Work</p>
      <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">Learning Projects</h1>
      <p className="text-lg text-slate-500 mb-10">
        Personal builds where I learn by doing — shipping real tools end-to-end outside of work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <a
            key={project.slug}
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block group border border-slate-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-sm transition-all bg-white"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors leading-snug">
                {project.title}
              </h3>
              <span className="ml-3 px-2 py-0.5 text-xs font-medium rounded-full bg-primary-50 text-primary-700 border border-primary-200 whitespace-nowrap">
                {project.status}
              </span>
            </div>
            <p className="text-slate-500 text-sm mb-4 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.stack.map((tag) => (
                <span key={tag} className="px-2 py-0.5 text-xs font-medium rounded bg-slate-100 text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-sm text-primary-600 font-medium">View on GitHub →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
