import React from "react";

function AbsentStudents(props) {
  const showAbsentStudent = props.absentStudents.map((obj) => (
    <p className="shadow p-2 bg-body rounded" key={obj.id}>
      {obj.name}
      <button
        className="ms-2 bg-warning mb-2"
        onClick={() => props.onMoveToPresent(obj.id)}
      >
        Move to Present
      </button>
    </p>
  ));
  return (
    <div className="shadow-lg p-2 mb-5 bg-body rounded">
      <h3 className="text-center">Absent Student</h3>
      <div className="area">
        <div>{showAbsentStudent}</div>
      </div>
    </div>
  );
}

export default AbsentStudents;
