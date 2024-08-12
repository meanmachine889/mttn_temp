import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Forms() {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [formError, setFormError] = useState(''); // State for form-wide errors
  const [year, setYear] = useState('');
  const [collegeName, setCollegeName] = useState('');

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(emailRegex.test(value) ? '' : 'Invalid email address');
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value);
    const phoneRegex = /^\d{10}$/;
    setPhoneError(phoneRegex.test(value) ? '' : 'Invalid phone number. Must be 10 digits.');
  };

  const handleYearChange = (e) => {
    setYear(e.target.value);
  };

  const handleCollegeNameChange = (e) => {
    setCollegeName(e.target.value);
  };

  const handleNext = () => {
    // Basic validation
    if (!email || !phone || !year || !collegeName) {
      setFormError('Please fill out all required fields.');
      return;
    }
    if (emailError || phoneError) {
      setFormError('Please correct the errors in the form.');
      return;
    }

    navigate('/departments');
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-white text-center">Recruitment Form for 1 Year</h1>
      <div className="bg-zinc-800 p-6 rounded-lg shadow-md w-full max-w-md sm:max-w-lg lg:max-w-2xl">
        {formError && (
          <p className="text-red-500 mb-4 text-center">{formError}</p>
        )}
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Form Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {/* First Name */}
            <div className="col-span-1">
              <label htmlFor="firstName" className="block text-gray-300 mb-2">First Name</label>
              <input
                type="text"
                id="firstName"
                className="w-full p-2 bg-zinc-900 border border-gray-600 text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Enter First Name"
                required
              />
            </div>
            {/* Last Name */}
            <div className="col-span-1">
              <label htmlFor="lastName" className="block text-gray-300 mb-2">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="w-full p-2 bg-zinc-900 border border-gray-600 text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none"
                placeholder="Enter Last Name"
              />
            </div>
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-300 mb-2">Mobile Number</label>
            <input
              type="text"
              id="phone"
              value={phone}
              onChange={handlePhoneChange}
              className={`w-full p-2 bg-zinc-900 border ${phoneError ? 'border-red-600' : 'border-gray-600'} text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none`}
              placeholder="Enter mobile number"
              required
            />
            {phoneError && (
              <p className="text-red-500 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-2">Your Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className={`w-full p-2 bg-zinc-900 border ${emailError ? 'border-red-600' : 'border-gray-600'} text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none`}
              placeholder="Enter your email"
              required
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Year of Study */}
          <div className="mb-4">
            <label htmlFor="year" className="block text-gray-300 mb-2">Year of Study</label>
            <select
              id="year"
              value={year}
              onChange={handleYearChange}
              className="w-full p-2 bg-zinc-900 border border-gray-600 text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none"
              required
            >
              <option value="">Select Year</option>
              <option value="1st">1st Year</option>
              <option value="2nd">2nd Year</option>
              <option value="3rd">3rd Year</option>
            </select>
          </div>

          {/* College Name */}
          <div className="mb-4">
            <label htmlFor="collegeName" className="block text-gray-300 mb-2">College Name</label>
            <input
              type="text"
              id="collegeName"
              value={collegeName}
              onChange={handleCollegeNameChange}
              className="w-full p-2 bg-zinc-900 border border-gray-600 text-gray-100 rounded-lg focus:border-blue-500 focus:outline-none"
              placeholder="Enter your college name"
              required
            />
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full p-3 mt-4 text-blue-600 font-semibold border border-blue-600 rounded-lg bg-transparent hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 transition-transform duration-300 ease-in-out transform hover:scale-105"
          >
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
