import { Link } from 'react-router-dom';

const CaseStudyCard = ({ caseStudy }) => {
  return (
    <Link
      to={`/case-studies/${caseStudy.slug}`}
      className="block group border border-slate-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-sm transition-all bg-white"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 group-hover:text-primary-600 transition-colors leading-snug">
          {caseStudy.title}
        </h3>
        {caseStudy.hasProductionExperience && (
          <span className="ml-3 px-2 py-0.5 text-xs font-medium rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 whitespace-nowrap">
            Production
          </span>
        )}
      </div>
      <span className="text-sm text-primary-600 font-medium">Read case study →</span>
    </Link>
  );
};

export default CaseStudyCard;
