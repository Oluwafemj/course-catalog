
import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import CourseCard from "../components/CourseCard";

function Category() {
  const { category } = useParams();

  const filteredCourses = courses.filter(
    (course) =>
      course.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <main className="page-container">
      <section className="category-header">
        <p className="hero-label">EXPLORE OUR COURSES</p>

        <h1>{category} Courses</h1>

        <p>
          Explore our {category.toLowerCase()} level courses
          and develop your programming skills.
        </p>
      </section>

      {filteredCourses.length > 0 ? (
        <div className="course-grid">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}
        </div>
      ) : (
        <div className="not-found">
          <h2>No courses found</h2>
          <p>There are no courses available in this category.</p>
        </div>
      )}
    </main>
  );
}

export default Category;