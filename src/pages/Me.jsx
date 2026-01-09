import { resumeData } from '../data/resume';
import SkillsTags from '../components/SkillsTags';
import Timeline from '../components/Timeline';

const Me = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Summary Section */}
      <section className="mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <p className="text-lg text-gray-700 leading-relaxed">
            {resumeData.summary}
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Skills</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <SkillsTags skills={resumeData.skills} />
        </div>
      </section>

      {/* Experience Timeline Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Experience</h2>
        <div className="bg-gray-50 rounded-lg shadow-sm p-8">
          <Timeline experiences={resumeData.experiences} />
        </div>
      </section>

      {/* Education Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Education</h2>
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{resumeData.education.university}</h3>
              <p className="text-primary-600 font-medium mt-1">
                {resumeData.education.degree} {resumeData.education.honors && `| ${resumeData.education.honors}`}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Me;
