import { Link } from "react-router-dom";

function CourseCard({ course }) {
  return (
    <Link
      to={`/courses/${course.slug}`}
      className="course-card"
    >
      <span className="category-badge">
        {course.category}
      </span>

      <h3>{course.title}</h3>

      <p className="course-duration">
        <span>Duration:</span> {course.duration}
      </p>

      <span className="view-course">
        View Course →
      </span>
    </Link>
  );
}

export default CourseCard;