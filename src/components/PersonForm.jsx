export const PersonForm = ({
    addPerson,
    newName,
    handleNameChange,
    newNumber,
    handleNumberChange,
}) => {
    return (
        <form onSubmit={addPerson}>
            <div>
                <label>
                    Name:
                    <input
                        type="text"
                        value={newName}
                        onChange={handleNameChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Number:
                    <input
                        type="tel"
                        value={newNumber}
                        onChange={handleNumberChange}
                    />
                </label>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    );
};
