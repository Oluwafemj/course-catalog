
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Home() {
  return (
    <main className="page-container">
      <section className="hero">
        <p className="hero-label">LEARN • BUILD • GROW</p>

        <h1>
          Explore Our <span>Courses</span>
        </h1>

        <p className="hero-description">
          Discover practical courses designed to help you
          build your skills and grow as a developer.
        </p>
      </section>

      <section className="courses-section">
        <div className="section-heading">
          <div>
            <h2>Available Courses</h2>
            <p>Choose a course and start learning today.</p>
          </div>

          <span className="course-count">
            {courses.length} Courses
          </span>
        </div>

        <div className="course-grid">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;