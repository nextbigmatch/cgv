import svgPaths from "./svg-3dkfds4uc7";

function TopNavInner() {
  return (
    <div className="absolute contents inset-0" data-name="Top-Nav-(Inner)">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 194 16">
        <g id="Bloombar-watches-horizontal-logo-navy">
          <path clipRule="evenodd" d={svgPaths.p3db18500} fill="var(--fill-0, #1B2932)" fillRule="evenodd" id="Fill-1" />
          <path clipRule="evenodd" d={svgPaths.p3db18500} fill="var(--fill-0, #1B2932)" fillRule="evenodd" id="Fill-1_2" />
        </g>
      </svg>
    </div>
  );
}

function Symbols() {
  return (
    <div className="absolute contents inset-0" data-name="Symbols">
      <TopNavInner />
    </div>
  );
}

export default function Group() {
  return (
    <div className="relative size-full">
      <Symbols />
    </div>
  );
}