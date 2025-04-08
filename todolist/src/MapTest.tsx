const MapTest = () => {
  const fruits: string[] = ["apple", "banana", "orange"];

  return (
    <div>
      {fruits.map((f, i) => {
        return <div key={i}>{f}</div>;
      })}
    </div>
  );
};

export default MapTest;
