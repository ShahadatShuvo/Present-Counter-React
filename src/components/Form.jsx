import React from "react";

function Form(props) {
  const student = props.student;
  const setStudent = props.setStudent;
  function handleChange(event) {
    setStudent(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (student !== "") {
      props.onForm(student);
    } else {
      alert("Give Student Name");
    }
    setStudent("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        name="student"
        value={student}
        onChange={handleChange}
      />
      <button>{props.edit.id ? "Edit Student" : "Add Student"}</button>
    </form>
  );
}

export default Form;
