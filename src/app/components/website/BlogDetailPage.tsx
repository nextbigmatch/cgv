import { useParams } from 'react-router-dom';

export default function BlogDetailPage() {
  const { postId } = useParams();
  
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Blog Post: {postId}</h1>
        <p className="text-xl text-neutral-600">Blog detail page content coming soon...</p>
      </div>
    </div>
  );
}