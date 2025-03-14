interface ProgressProps {
  step: number;
  length: number;
}

export function Progress({ step, length }: ProgressProps) {
  return (
    <div className="h-1.5 w-full rounded-full bg-gray-200">
      <div
        className="h-full rounded-full bg-secondary-100 duration-300 ease-in-out"
        style={{ width: `${(step / length) * 100}%` }}
      />
    </div>
  );
}
