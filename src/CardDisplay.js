export default function CardDisplay({cardName}) {
  return (
    <>
      <h1>Here's your card:</h1>
      <div className="card">{cardName}</div>;
    </>
  );
}
