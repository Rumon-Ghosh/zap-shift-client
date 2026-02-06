const TestimonialCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-md max-w-md mx-auto text-center relative">
      {/* Quote icon */}
      <div className="text-5xl text-teal-200 absolute top-6 left-6">“</div>

      {/* Quote */}
      <p className="text-gray-600 text-base leading-relaxed mt-8">
        {item.quote}
      </p>

      {/* Divider */}
      <div className="border-t border-dashed border-gray-300 my-6"></div>

      {/* User */}
      <div className="flex items-center justify-center gap-4">
        <div
          className="w-12 h-12 rounded-full"
          style={{ backgroundColor: item.avatar }}
        />
        <div className="text-left">
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-sm text-gray-500">{item.role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
