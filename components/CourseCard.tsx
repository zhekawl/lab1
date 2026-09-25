import Link from "next/link";

type CourseCardProps = {
  id: string;
  title: string;
  description: string;
  credits: number;
  likes: number;
};

export default function CourseCard({ id, title, description, credits, likes }: CourseCardProps) {
  return (
    <Link href={`/courses/${id}`} className="block p-4 border rounded hover:shadow-sm">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">{description}</p>
      <div className="mt-3 flex justify-between items-center text-sm">
        <span>Credits: {credits}</span>
        <span>❤ {likes}</span>
      </div>
    </Link>
  );
}
