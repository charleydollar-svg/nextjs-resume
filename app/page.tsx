export default function Home() {
  return (
    <main className="max-w-4xl mx-auto my-10 p-12 bg-white border border-gray-200 shadow-sm font-sans text-gray-800">
      
      {/* HEADER SECTION */}
      <header className="mb-10 border-b-4 border-emerald-600 pb-6">
        <h1 className="text-5xl font-extrabold text-gray-900 tracking-tight">Your Name</h1>
        <div className="mt-3 flex gap-4 text-sm text-gray-600">
          <span>Tampa, FL</span>
          <span>•</span>
          <a href="mailto:email@usf.edu" className="hover:text-emerald-600">email@usf.edu</a>
          <span>•</span>
          <span>(352) 514-2151</span>
        </div>
      </header>

      {/* EDUCATION SECTION */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-emerald-700 mb-4">Education</h2>
        <div className="flex justify-between items-baseline">
          <h3 className="text-lg font-bold">University of South Florida</h3>
          <span className="text-sm font-medium text-gray-500">Aug 2023 – May 2027</span>
        </div>
        <p className="italic">Bachelor of Science in Business Analytics and Information Systems</p>
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li>GPA: 3.6/4.0</li>
          <li>Dean's List Honors</li>
        </ul>
      </section>

      {/* WORK EXPERIENCE */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-emerald-700 mb-4">Experience</h2>
        <div className="space-y-6">
          <div>
            <div className="flex justify-between">
              <h3 className="font-bold">Owner & Operator | eBay Sales Business</h3>
              <span className="text-sm text-gray-500">May 2018 – Present</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Analyze product trends and refurbish electronics for resale.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="mb-10">
        <h2 className="text-xl font-bold uppercase tracking-widest text-emerald-700 mb-4">Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold">Technical</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Python</li>
              <li>JavaScript</li>
              <li>SQL</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold">Soft Skills</h3>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Communication</li>
              <li>Problem Solving</li>
              <li>Teamwork</li>
            </ul>
          </div>
        </div>
      </section>

        {/* PROJECTS SECTION */}
        <section>
          <h2 className="text-xl font-bold uppercase tracking-widest text-emerald-700 mb-4">Projects</h2>
          <div className="space-y-6">
            <div>
            <div className="flex justify-between">
              <h3 className="font-bold">Business Analytics Tableau Assignment</h3>
              <span className="text-sm text-gray-500">June 2025 – July 2025</span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              ▪	Completed nine workbooks on different sales of a company selling between three categories of technology, furniture, and office supplies which were evaluated on an overview dashboard of the sales and a dashboard on recommended strategies for the future.
▪	Used organization, effective presentation skills, business analyst insights, and data to complete a visual presentation on recommendations to improve underperforming product segments to my peers

            </p>
            </div>
          </div>
        </section>
    </main>
  );
}