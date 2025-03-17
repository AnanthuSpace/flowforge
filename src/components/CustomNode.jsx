import { Handle, Position } from "@xyflow/react";
import { Pencil, Trash } from "lucide-react";
import { useState } from "react";

const CustomNode = ({ data, id, onDelete, onEdit }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative p-4 bg-white border border-gray-300 rounded-md shadow-md"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <strong>{data.label}</strong>

      {hovered && (
        <div className="absolute -top-2 -right-2 flex gap-2">
          <button onClick={() => onEdit(id)} className="text-blue-500 hover:text-blue-700">
            <Pencil size={18} />
          </button>
          <button onClick={() => onDelete(id)} className="text-red-500 hover:text-red-700">
            <Trash size={18} />
          </button>
        </div>
      )}

      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default CustomNode;
