type ComponentAProps = { propA: string; propB: number };

export function ComponentA({ propA, propB }: ComponentAProps) {
  return (
    <div>
      <h1>Component</h1>
      <p>Prop A: {propA}</p>
      <p>Prop B: {propB}</p>
    </div>
  );
}
