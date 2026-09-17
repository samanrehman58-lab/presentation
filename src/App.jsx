import { useState } from "react";
import "./App.css";

function App() {

  // -------------------------
  // STUDENTS DATA
  // -------------------------

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Muhammad Ali",
      email: "ali@gmail.com",
      course: "React"
    },
    {
      id: 2,
      name: "Ayesha Khan",
      email: "ayesha@gmail.com",
      course: "JavaScript"
    }
  ]);


  // -------------------------
  // FORM DATA
  // -------------------------

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: ""
  });


  // -------------------------
  // EDITING STUDENT ID
  // -------------------------

  const [editingId, setEditingId] = useState(null);


  // -------------------------
  // CREATE + UPDATE
  // -------------------------

  const handleSubmit = (e) => {

    e.preventDefault();

    // UPDATE
    if (editingId) {

      setStudents(
        students.map((student) =>
          student.id === editingId
            ? {
                ...student,
                ...formData
              }
            : student
        )
      );

      setEditingId(null);

    }

    // CREATE
    else {

      const newStudent = {
        id: Date.now(),
        ...formData
      };

      setStudents([...students, newStudent]);
    }


    // Clear form
    setFormData({
      name: "",
      email: "",
      course: ""
    });
  };


  // -------------------------
  // DELETE
  // -------------------------

  const deleteStudent = (id) => {

    setStudents(
      students.filter((student) => student.id !== id)
    );

  };


  // -------------------------
  // EDIT
  // -------------------------

  const editStudent = (student) => {

    setFormData({
      name: student.name,
      email: student.email,
      course: student.course
    });

    setEditingId(student.id);
  };


  // -------------------------
  // USER INTERFACE
  // -------------------------

  return (

    <div className="container">

      <h1>Student Management System</h1>

      <p className="subtitle">
        React CRUD Operation
      </p>


      {/* =====================
          STUDENT FORM
      ====================== */}

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Student Name"
          value={formData.name}
          onChange={(e) =>
            setFormData({
              ...formData,
              name: e.target.value
            })
          }
          required
        />


        <input
          type="email"
          placeholder="Enter Student Email"
          value={formData.email}
          onChange={(e) =>
            setFormData({
              ...formData,
              email: e.target.value
            })
          }
          required
        />


        <input
          type="text"
          placeholder="Enter Course"
          value={formData.course}
          onChange={(e) =>
            setFormData({
              ...formData,
              course: e.target.value
            })
          }
          required
        />


        <button type="submit">

          {editingId
            ? "Update Student"
            : "Add Student"
          }

        </button>

      </form>


      {/* =====================
          STUDENT LIST
      ====================== */}

      <h2>Student List</h2>


      <div className="student-list">

        {students.map((student) => (

          <div
            className="student-card"
            key={student.id}
          >

            <div>

              <h3>{student.name}</h3>

              <p>
                <strong>Email:</strong>{" "}
                {student.email}
              </p>

              <p>
                <strong>Course:</strong>{" "}
                {student.course}
              </p>

            </div>


            <div className="actions">

              <button
                className="edit-btn"
                onClick={() =>
                  editStudent(student)
                }
              >
                Edit
              </button>


              <button
                className="delete-btn"
                onClick={() =>
                  deleteStudent(student.id)
                }
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;
