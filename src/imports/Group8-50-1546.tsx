import svgPaths from "./svg-drc6bcoy75";

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <svg className="block size-full" fill="none" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1689.05 812.91">
        <g id="Group">
          <path d={svgPaths.p2c2e0500} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p2f48a372} fill="var(--fill-0, #FC9601)" id="Vector_2" />
          <path d={svgPaths.p2e4bbe60} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p1cfffe80} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <ClipPathGroup />
    </div>
  );
}