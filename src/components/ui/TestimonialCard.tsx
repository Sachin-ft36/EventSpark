
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  avatarUrl: string;
}

const TestimonialCard = ({ quote, author, role, avatarUrl }: TestimonialProps) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden mr-4">
          <img 
            src={avatarUrl} 
            alt={author}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-lg">{author}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-700 italic">"{quote}"</p>
      <div className="flex mt-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
