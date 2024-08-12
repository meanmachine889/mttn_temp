import { useState } from 'react';

// Define departments and their fields
const departments = [
  {
    name: 'Videography',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Showreel (URL)', type: 'url' },
      { label: 'Experience (Years)', type: 'number' },
      { label: 'Upload Portfolio', type: 'file' },
      { label: 'Additional Comments', type: 'textarea', rows: 5 },
    ],
  },
  {
    name: 'Photography',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Portfolio (URL)', type: 'url' },
      { label: 'Preferred Camera Type', type: 'checkbox', options: ['DSLR', 'Mirrorless', 'Point and Shoot'] },
      { label: 'Upload Samples', type: 'file' },
      { label: 'Introduce yourself.', type: 'textarea', rows: 3 },
    ],
  },
  {
    name: 'Arts & Graphics',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Design Software Experience', type: 'checkbox', options: ['Photoshop', 'Illustrator', 'CorelDRAW'] },
      { label: 'Portfolio (URL)', type: 'url' },
      { label: 'Upload Design Samples', type: 'file' },
    ],
  },
  {
    name: 'Writing',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Writing Samples (URL)', type: 'url' },
      { label: 'Upload Writing Samples', type: 'file' },
    ],
  },
  {
    name: 'Development',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'GitHub Profile', type: 'url' },
      { label: 'Years of Experience', type: 'number' },
      { label: 'Preferred Programming Languages', type: 'checkbox', options: ['JavaScript', 'Python', 'Java'] },
    ],
  },
  {
    name: 'BDPR',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Experience Summary', type: 'textarea', rows: 5 },
      { label: 'Upload Resume', type: 'file' },
    ],
  },
  {
    name: 'Human Resources',
    fields: [
      { label: 'Name', type: 'text' },
      { label: 'Email', type: 'email' },
      { label: 'Upload Resume', type: 'file' },
      { label: 'How did you hear about us?', type: 'radio', options: ['LinkedIn', 'Company Website', 'Referral'] },
    ],
  },
];

export default function DepartmentForm() {
  const [activeDepartment, setActiveDepartment] = useState(null);
  const [formData, setFormData] = useState({});

  const handleChange = (departmentIndex, fieldIndex, e) => {
    const { name, type, value, files, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [`${departmentIndex}_${fieldIndex}`]: type === 'checkbox' ? checked : type === 'file' ? files : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('departmentFormData', JSON.stringify(formData));
    alert('Form submitted and data saved locally!');
  };

  const toggleDepartment = (index) => {
    setActiveDepartment(activeDepartment === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center">
      <h1 className="text-3xl font-bold my-8">Department Specific Form</h1>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-md">
        <form onSubmit={handleSubmit}>
          {departments.map((department, departmentIndex) => (
            <div key={departmentIndex} className="mb-4">
              <button
                type="button"
                onClick={() => toggleDepartment(departmentIndex)}
                className="w-full flex justify-between items-center text-left bg-zinc-900 text-white p-2 rounded-lg"
              >
                <span>{department.name}</span>
                <span className="ml-2">
                  {activeDepartment === departmentIndex ? '▲' : '▼'}
                </span>
              </button>
              {activeDepartment === departmentIndex && (
                <div className="mt-2 p-4 bg-zinc-600 rounded-lg">
                  {department.fields.map((field, fieldIndex) => (
                    <div key={fieldIndex} className="mb-4">
                      <label className="block text-white mb-2">{field.label}</label>
                      {field.type === 'text' || field.type === 'email' || field.type === 'url' || field.type === 'number' ? (
                        <input
                          type={field.type}
                          name={field.label}
                          className="w-full p-2 border rounded-lg bg-zinc-900 text-white"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                          onChange={(e) => handleChange(departmentIndex, fieldIndex, e)}
                        />
                      ) : field.type === 'textarea' ? (
                        <textarea
                          rows={field.rows}
                          name={field.label}
                          className="w-full p-2 border rounded-lg bg-zinc-900 text-white"
                          placeholder={`Enter your ${field.label.toLowerCase()}`}
                          onChange={(e) => handleChange(departmentIndex, fieldIndex, e)}
                        />
                      ) : field.type === 'file' ? (
                        <input
                          type="file"
                          name={field.label}
                          className="w-full p-2 border rounded-lg bg-zinc-900 text-white"
                          onChange={(e) => handleChange(departmentIndex, fieldIndex, e)}
                        />
                      ) : field.type === 'radio' ? (
                        field.options.map((option, j) => (
                          <div key={j} className="flex items-center mb-2">
                            <input
                              type="radio"
                              name={field.label}
                              value={option}
                              className="mr-2"
                              onChange={(e) => handleChange(departmentIndex, fieldIndex, e)}
                            />
                            <label>{option}</label>
                          </div>
                        ))
                      ) : field.type === 'checkbox' ? (
                        field.options.map((option, j) => (
                          <div key={j} className="flex items-center mb-2">
                            <input
                              type="checkbox"
                              name={field.label}
                              value={option}
                              className="mr-2"
                              onChange={(e) => handleChange(departmentIndex, fieldIndex, e)}
                            />
                            <label>{option}</label>
                          </div>
                        ))
                      ) : null}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            type="submit"
            className="mt-4 w-full p-3 text-blue-600 font-semibold border border-blue-600 rounded-lg bg-transparent hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
