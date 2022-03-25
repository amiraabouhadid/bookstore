/* eslint-disable react/prop-types */
import React from 'react';

const cleanPercentage = (percentage) => {
  const tooLow = !Number.isFinite(+percentage) || percentage < 0;
  const tooHigh = percentage > 100;
  if (tooLow) {
    return 0;
  } if (tooHigh) {
    return 100;
  }
  return +percentage;
};

const Circle = ({ colour, pct }) => {
  const r = 35;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - pct) * circ) / 100;
  return (
    <circle
      r={r}
      cx={140}
      cy={85}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ''}
      strokeWidth="0.35rem"
      strokeDasharray={circ}
      strokeDashoffset={pct ? strokePct : 0}
      strokeLinecap="round"
    />
  );
};

const Pie = ({ percentage, colour }) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={200} height={175} className="bg-white">
      <g transform={`rotate(-90 ${'100 100'})`}>
        <Circle colour="lightgrey" />
        <Circle colour={colour} pct={pct} />
      </g>
    </svg>
  );
};

export default Pie;
