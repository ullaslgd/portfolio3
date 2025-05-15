import React from 'react';

const certifications = [
  { name: 'Full Stack Web Development', issuer: 'Udemy', date: '2024-05-15' },
  { name: 'Generative AI Essentials', issuer: 'LinkedIn', date: '2024-06-23' },
  { name: 'AWS Technical Essentials', issuer: 'Simplilearn', date: '2024-10-23' },
  { name: 'Web Development Internship', issuer: 'Uptricks', date: '2024-11-24' },
  { name: 'Introduction to MongoDB', issuer: 'MongoDB', date: '2024-12-08' },
  { name: 'Python for Machine Learning', issuer: 'Kaggle', date: '2025-01-30' },
  { name: 'Intro to Machine Learning', issuer: 'Kaggle', date: '2025-01-31' },
  { name: 'Data Science Fundamentals', issuer: 'Scaler Topics', date: '2025-02-04' },
  { name: 'Data Analytics Job Simulation', issuer: 'Deloitte', date: '2025-02-07' },
];

const CertificationTable = () => {
  return (
    <section className="max-w-6xl mx-auto my-16 p-10 bg-white rounded-xl shadow-lg border border-gray-300 min-h-[500px]">
      <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
        🎓 Certifications
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-4 px-6 font-semibold text-gray-700 border-b border-gray-300">📜 Certification</th>
              <th className="py-4 px-6 font-semibold text-gray-700 border-b border-gray-300">🏢 Issued By</th>
              <th className="py-4 px-6 font-semibold text-gray-700 border-b border-gray-300">📅 Date</th>
            </tr>
          </thead>
          <tbody>
            {certifications.map(({ name, issuer, date }) => (
              <tr key={name} className="hover:bg-gray-50 transition-colors cursor-default">
                <td className="py-4 px-6 border-b border-gray-200">{name}</td>
                <td className="py-4 px-6 border-b border-gray-200">{issuer}</td>
                <td className="py-4 px-6 border-b border-gray-200">{new Date(date).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default CertificationTable;


