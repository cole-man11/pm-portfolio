const Timeline = ({ experiences }) => {
  return (
    <div className="relative">
      {/* Vertical line */}
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300"></div>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="relative flex items-start">
            {/* Timeline dot */}
            <div className="absolute left-2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white shadow-lg"></div>
            
            {/* Content */}
            <div className="ml-12 flex-1">
              <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{exp.role}</h3>
                  <span className="text-sm text-gray-500 mt-1 sm:mt-0">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-primary-600 font-medium mb-2">{exp.company}</p>
                <p className="text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
