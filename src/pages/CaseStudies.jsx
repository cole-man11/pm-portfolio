import { caseStudies } from '../data/caseStudies';
import CaseStudyCard from '../components/CaseStudyCard';

const CaseStudies = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-3">Portfolio</p>
      <h1 className="text-4xl font-bold text-slate-900 mb-3 tracking-tight">My Work</h1>
      <p className="text-lg text-slate-500 mb-10">
        Product management case studies and real-world production experiences.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {caseStudies.map((caseStudy) => (
          <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
