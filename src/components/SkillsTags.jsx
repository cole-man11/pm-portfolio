const SkillsTags = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <span
          key={index}
          className="px-3 py-1 text-sm font-medium bg-slate-100 text-slate-600 rounded-full hover:bg-primary-50 hover:text-primary-700 transition-colors cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  );
};

export default SkillsTags;
