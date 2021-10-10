import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const initialInputs = {
    "task": "",
    "date": "",
    "important": false,
  }
  const [inputs, setInputs] = useState(initialInputs);

  const HandleInput = (e) => {
    const name = e.target.name;
    var value = null;
    if (e.target.type === "text") {
      value = e.target.value;
    } else if (e.target.type === "checkbox") {
      value = e.currentTarget.checked;
    }
    if (value !== null) {
      setInputs(values => ({ ...values, [name]: value }))
    } else throw new Error("oops. cannot set that input: ", e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    onAdd(inputs);
    setInputs(initialInputs);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="task">Task</label>
        <input
          type="text"
          name="task"
          value={inputs.task}
          onChange={HandleInput}
          placeholder="Add task..." />
      </div>
      <div className="form-control">
        <label htmlFor="date">Date</label>
        <input
          type="text"
          name="date"
          value={inputs.date}
          onChange={HandleInput}
          placeholder="Day and time..." />
      </div>
      <div className="form-control form-control-check">
        <label htmlFor="important">Set Important</label>
        <input
          type="checkbox"
          name="important"
          checked={inputs.important}
          value={inputs.important}
          onChange={HandleInput} />
      </div>

      <input
        type="submit"
        value="Submit"
        className="btn btn-block" />

      <div>{ }</div>
    </form>
  )
}

export default AddTask
