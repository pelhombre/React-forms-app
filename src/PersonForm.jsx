export const PersonForm = ({ handleSubmit, newName, handleNameChange, newNumber, handleNumberChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        name:{" "}
        <input type="text" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        Number:{" "}
        <input type="text" value={newNumber} onChange={handleNumberChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );

}