import { Link } from 'react-router-dom';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-200"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-gray-900 hover:text-primary-600 transition-colors">
            {caseStudy.title}
          </h3>
          {caseStudy.hasProductionExperience && (
            <span className="ml-3 px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800 whitespace-nowrap">
              Production Experience
            </span>
          )}
        </div>
        <div className="text-gray-600 text-sm mt-2">
          View case study →
        </div>
      </div>
    </Link>
  );
};

export default CaseStudyCard;
