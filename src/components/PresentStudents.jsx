import React from "react";

function PresentStudents(props) {
  const showPresentStudent = props.presentStudents.map((obj) => (
    <p className="shadow p-2 bg-body rounded" key={obj.id}>
      {obj.name}
      <button
        className="ms-2 bg-warning mb-2"
        onClick={() => props.onMoveToAbsent(obj.id)}
      >
        Move to Absent
      </button>
    </p>
  ));

  const len = props.presentStudents.length;
  const styles = {
    display: len ? "none" : "block",
  };
  return (
    <div className="shadow-lg p-2 mb-5 bg-body rounded">
      <h3 className="text-center">Present Student</h3>
      <div className="area">
        <div style={styles}>
          <p>List is empty</p>
        </div>
        <div>{showPresentStudent}</div>
      </div>
    </div>
  );
}

export default PresentStudents;
