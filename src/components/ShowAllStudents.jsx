import React from "react";

function ShowAllStudents(props) {
  const showStudent = props.allStudents.map((student) => (
    <p className="shadow p-3 bg-body rounded" key={student.id}>
      {student.name}
      <button
        className="ms-2 bg-warning mb-2"
        onClick={() => props.onEdit(student.id)}
      >
        Edit
      </button>
      <button
        className="ms-2 bg-danger text-light"
        onClick={() => props.onDelete(student.id)}
      >
        Delete
      </button>
      {student.isShown && (
        <button
          className="ms-2 bg-success text-light"
          onClick={() => props.onPresent(student.id)}
        >
          Present
        </button>
      )}

      {student.isShown && (
        <button
          className="ms-2 bg-secondary text-light"
          onClick={() => props.onAbsent(student.id)}
        >
          Absent
        </button>
      )}
    </p>
  ));
  return (
    <div className="shadow-lg p-3 mb-5 bg-body rounded">
      <h3 className="text-center">All Students</h3>
      <div className="area">
        <div>{showStudent}</div>
      </div>
    </div>
  );
}

export default ShowAllStudents;
