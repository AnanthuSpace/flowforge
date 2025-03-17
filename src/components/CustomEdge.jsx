const CustomEdge = ({ id, sourceX, sourceY, targetX, targetY }) => {
    return (
      <path
        fill="none"
        stroke="gray"
        strokeWidth={2}
        className="custom-edge"
        d={`M${sourceX},${sourceY} L${targetX},${targetY}`}
      />
    );
  };
  
  export default CustomEdge;
  