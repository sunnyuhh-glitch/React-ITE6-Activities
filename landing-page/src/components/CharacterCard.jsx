function CharacterCard({ name, house, actor, image, species }) {
  return (
    <div className="character-card">
    {image ? (
  <img src={image} alt={name} />
) : (
  <div className="no-image">No Image</div>
)}

      <h2>{name}</h2>
      <p><strong>House:</strong> {house || "Unknown"}</p>
      <p><strong>Actor:</strong> {actor || "Unknown"}</p>
      <p><strong>Species:</strong> {species || "Unknown"}</p>
    </div>
  );
}

export default CharacterCard;