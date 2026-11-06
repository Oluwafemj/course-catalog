
import { useNavigate, useParams } from "react-router-dom";
import { courses } from "../data/courses";

function CourseDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const course = courses.find(
    (item) => item.slug === slug
  );

  if (!course) {
    return (
      <main className="page-container not-found">
        <h1>Course not found</h1>
        <p>The course you are looking for does not exist.</p>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </main>
    );
  }

  return (
    <main className="page-container detail-page">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Go Back
      </button>

      <section className="detail-header">
        <span className="category-badge">
          {course.category}
        </span>

        <h1>{course.title}</h1>

        <p className="course-duration">
          Duration: {course.duration}
        </p>

        <p className="detail-description">
          {course.description}
        </p>
      </section>

      <section className="topics-section">
        <h2>What You Will Learn</h2>

        <ul>
          {course.topics.map((topic, index) => (
            <li key={index}>
              {topic}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default CourseDetail;