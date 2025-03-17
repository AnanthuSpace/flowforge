const EditNodeModal = ({ newLabel, setNewLabel, handleSave, onClose }) => {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded-md w-96">
          <h3 className="text-lg font-semibold mb-4">Edit Node Label</h3>
          <input
            type="text"
            className="border p-2 w-full mb-4 rounded-md"
            value={newLabel}
            onChange={(e) => setNewLabel(e.target.value)}
          />
          <div className="flex justify-end gap-4">
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-600 text-white rounded-md"
            >
              Save
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-400 text-white rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default EditNodeModal;
  