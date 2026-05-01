import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';
import SkillsTags from '../components/SkillsTags';
import Timeline from '../components/Timeline';

const Me = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-primary-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Product Manager · Raleigh, NC
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight tracking-tight">
            Cole Lance
          </h1>
          <p className="text-lg text-slate-300 max-w-xl mb-8 leading-relaxed">
            B2B PM specializing in data platforms, developer experience, and fintech.
            I help lean teams build scalable systems that punch above their weight.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkedin.com/in/cole-lance/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary-600 text-white text-sm font-medium rounded-lg hover:bg-primary-500 transition-colors"
            >
              LinkedIn
            </a>
            <Link
              to="/case-studies"
              className="px-5 py-2.5 bg-slate-700 text-white text-sm font-medium rounded-lg hover:bg-slate-600 transition-colors"
            >
              View My Work
            </Link>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* About */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-3">About</p>
          <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
            {resumeData.summary}
          </p>
        </section>

        {/* Skills */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Skills</p>
          <SkillsTags skills={resumeData.skills} />
        </section>

        {/* Experience */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-6">Experience</p>
          <Timeline experiences={resumeData.experiences} />
        </section>

        {/* Education */}
        <section>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary-600 mb-4">Education</p>
          <div className="border-l-2 border-slate-200 pl-5">
            <h3 className="font-semibold text-slate-900">{resumeData.education.university}</h3>
            <p className="text-slate-500 text-sm mt-0.5">
              {resumeData.education.degree}
              {resumeData.education.honors && ` · ${resumeData.education.honors}`}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Me;
