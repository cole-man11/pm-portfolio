import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import MarkdownRenderer from '../components/MarkdownRenderer';

const CaseStudyDetail = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies.find(cs => cs.slug === slug);

  if (!caseStudy) {
    return <Navigate to="/case-studies" replace />;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-4xl font-bold text-gray-900">{caseStudy.title}</h1>
          {caseStudy.hasProductionExperience && (
            <span className="px-3 py-1 text-sm font-semibold rounded-full bg-green-100 text-green-800">
              Production Experience
            </span>
          )}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <MarkdownRenderer filePath={caseStudy.markdownFile} />
      </div>
    </div>
  );
};

export default CaseStudyDetail;
