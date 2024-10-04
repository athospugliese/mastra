const Input = ({ label, type = 'text', placeholder, icon, error, ...props }) => {
  return (
    <div className="mb-4">
      <label className="sr-only">{label}</label>
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg focus:outline-none focus:ring-primary-100 focus:border-primary-100 ${icon ? 'pl-10' : ''} ${error ? 'border-red-500' : ''}`}
          {...props} 
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-2">{error}</p>}
    </div>
  );
};

export default Input;
