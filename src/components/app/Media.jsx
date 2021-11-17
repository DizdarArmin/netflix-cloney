export default function Media({ item }) {
  return (
    <div>
      {item.titles.map((item) => (
        <h1>{item.name}</h1>
      ))}
    </div>
  );
}
