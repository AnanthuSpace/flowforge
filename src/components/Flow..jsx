import { useCallback, useState } from "react";
import {
  ReactFlow,
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import CustomNode from "./CustomNode";
import CustomEdge from "./CustomEdge";
import EditNodeModal from "./EditNodeModal ";

const initialNodes = [];

const initialEdges = [];

const Flow = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [editingNode, setEditingNode] = useState(null);
  const [newLabel, setNewLabel] = useState("");

  const addNode = () => {
    const newNode = {
      id: `${nodes.length + 1}`,
      type: "custom",
      position: { x: Math.random() * 400, y: Math.random() * 400 },
      data: { label: `Custom Node ${nodes.length + 1}` },
    };
    setNodes((prev) => [...prev, newNode]);
  };

  const deleteNode = (nodeId) => {
    setNodes((nds) => nds.filter((n) => n.id !== nodeId));
    setEdges((eds) =>
      eds.filter((e) => e.source !== nodeId && e.target !== nodeId)
    );
  };

  const editNode = (nodeId) => {
    const node = nodes.find((n) => n.id === nodeId);
    setEditingNode(node);
    setNewLabel(node.data.label);
  };

  const handleSave = () => {
    setNodes((prev) =>
      prev.map((node) =>
        node.id === editingNode.id
          ? { ...node, data: { ...node.data, label: newLabel } }
          : node
      )
    );
    setEditingNode(null);
    setNewLabel("");
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const nodeTypes = {
    custom: (props) => (
      <CustomNode {...props} onDelete={deleteNode} onEdit={editNode} />
    ),
  };

  const edgeTypes = { custom: CustomEdge };

  return (
    <div className="w-full h-screen">
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-md m-4"
        onClick={addNode}
      >
        Add Node
      </button>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>

      {editingNode && (
        <EditNodeModal
          newLabel={newLabel}
          setNewLabel={setNewLabel}
          handleSave={handleSave}
          onClose={() => setEditingNode(null)}
        />
      )}
    </div>
  );
};

export default Flow;
