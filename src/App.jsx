import React from "react";
import Form from "./components/Form";
import ShowAllStudents from "./components/ShowAllStudents";
import PresentStudents from "./components/PresentStudents";
import AbsentStudents from "./components/AbsentStudents";
function App() {
  const [allStudents, setAllStudents] = React.useState([]);

  const [edit, setEdit] = React.useState({ id: "", name: "" });

  const [student, setStudent] = React.useState("");

  const [presentStudents, setPresentStudents] = React.useState([]);

  const [absentStudents, setAbsentStudents] = React.useState([]);

  function onFormHandler(name) {
    if (edit.id === "") {
      const studentObject = {
        id: "id" + new Date().getTime(),
        name: name,
        isShown: true,
      };
      setAllStudents((prevAllStudents) => [...prevAllStudents, studentObject]);
    } else {
      setAllStudents((prevAllStudents) => {
        return prevAllStudents.map((stdObj) => {
          if (stdObj.id === edit.id) {
            stdObj = { ...stdObj, name: name };
          }
          return stdObj;
        });
      });
    }
    setEdit({ id: "", name: "" });
  }

  function onDeleteHandler(id) {
    const filteredStudents = allStudents.filter(
      (studentObj) => studentObj.id !== id
    );
    setAllStudents(filteredStudents);
    setEdit({ id: "", name: "" });
  }

  function onEditHandler(id) {
    const findStudent = allStudents.find((studentObj) => studentObj.id === id);
    setStudent(findStudent.name);
    setEdit(findStudent);
  }

  function onPresentHandler(id) {
    setAllStudents((prevAllStudents) => {
      const finalArray = prevAllStudents.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            isShown: false,
          };
        }
        return obj;
      });
      return finalArray;
    });
    const findStudent = allStudents.find((obj) => obj.id === id);
    setPresentStudents((prevAllPresentStudents) => [
      ...prevAllPresentStudents,
      findStudent,
    ]);
  }
  function onAbsentHandler(id) {
    setAllStudents((prevAllStudents) => {
      const finalArray = prevAllStudents.map((obj) => {
        if (obj.id === id) {
          return {
            ...obj,
            isShown: false,
          };
        }
        return obj;
      });
      return finalArray;
    });
    const findStudent = allStudents.find((obj) => obj.id === id);
    setAbsentStudents((prevAllAbsentStudents) => [
      ...prevAllAbsentStudents,
      findStudent,
    ]);
  }

  function onMoveToAbsentHandler(id) {
    console.log("Toogle clicked " + id);
    setPresentStudents((prevAllPresentStudents) => {
      return prevAllPresentStudents.filter((obj) => obj.id !== id);
    });
    const findStudent = allStudents.find((obj) => obj.id === id);
    setAbsentStudents((prevAllAbsent) => [...prevAllAbsent, findStudent]);
  }

  function onMoveToPresentHandler(id) {
    console.log("Toogle clicked " + id);
    setAbsentStudents((prevAllAbsentStudents) => {
      return prevAllAbsentStudents.filter((obj) => obj.id !== id);
    });
    const findStudent = allStudents.find((obj) => obj.id === id);
    setPresentStudents((prevAllPresent) => [...prevAllPresent, findStudent]);
  }

  return (
    <div className="container">
      <h2 className="text-center border rounded-3 mt-3 bg-success text-light py-2">
        Present Management App
      </h2>
      <div className="row justify-content-center">
        <div className="col-12 col-md-4 mt-5">
          <Form
            onForm={onFormHandler}
            edit={edit}
            student={student}
            setStudent={setStudent}
          />
        </div>
      </div>
      <div className="row justify-content-between mt-5">
        <div className="col-10 mx-auto col-md-5">
          <ShowAllStudents
            allStudents={allStudents}
            setAllStudents={setAllStudents}
            onDelete={onDeleteHandler}
            onEdit={onEditHandler}
            onPresent={onPresentHandler}
            onAbsent={onAbsentHandler}
          />
        </div>
        <div className="col-12 mx-auto col-md-4">
          <PresentStudents
            presentStudents={presentStudents}
            onMoveToAbsent={onMoveToAbsentHandler}
          />
        </div>
        <div className="col-12 mx-auto col-md-3">
          <AbsentStudents
            absentStudents={absentStudents}
            onMoveToPresent={onMoveToPresentHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
