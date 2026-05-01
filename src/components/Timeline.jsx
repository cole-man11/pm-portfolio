const Timeline = ({ experiences }) => {
  return (
    <div className="space-y-8">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border-l-2 border-slate-200 pl-5 hover:border-primary-400 transition-colors group"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1">
            <h3 className="font-semibold text-slate-900 group-hover:text-primary-700 transition-colors">
              {exp.role}
            </h3>
            <span className="text-xs text-slate-400 mt-0.5 sm:mt-0 font-medium">
              {exp.startDate} – {exp.endDate}
            </span>
          </div>
          <p className="text-primary-600 text-sm font-medium mb-2">{exp.company}</p>
          <p className="text-slate-500 text-sm leading-relaxed">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
