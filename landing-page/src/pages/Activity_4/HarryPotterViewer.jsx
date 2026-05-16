import { useState, useEffect } from "react";
import CharacterCard from "../../components/CharacterCard";
import "./HarryPotterViewer.css";

function HarryPotterViewer() {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");
  const [house, setHouse] = useState("All");
  const [loading, setLoading] = useState(true);

  const API_URL = "https://hp-api.onrender.com/api/characters";

useEffect(() => {
  setLoading(true);

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      setCharacters(data);
      setLoading(false); // 🔥 stops loader ONLY when data is ready
    })
    .catch((error) => {
      console.log("Error:", error);
      setLoading(false);
    });
}, []);

  const filteredCharacters = characters.filter((character) => {
    const matchesSearch = character.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesHouse =
      house === "All" || character.house === house;

    return matchesSearch && matchesHouse;
  });

  return (
    <div className="hp-container">
      <h1>⚡ Harry Potter Character Viewer</h1>
      <p className="subtitle">
        Displaying character data from an API using React Hooks.
      </p>

      <div className="controls">
        <input
          type="text"
          placeholder="Search character..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select value={house} onChange={(e) => setHouse(e.target.value)}>
          <option value="All">All Houses</option>
          <option value="Gryffindor">Gryffindor</option>
          <option value="Slytherin">Slytherin</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
        </select>
      </div>

 {loading ? (
  <div className="character-grid">
    {[...Array(8)].map((_, index) => (
      <div className="character-card skeleton" key={index}>
        <div className="skeleton-img"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text short"></div>
      </div>
    ))}
  </div>
) : (
        <div className="character-grid">
          {filteredCharacters.slice(0, 20).map((character) => (
            <CharacterCard
              key={character.id}
              name={character.name}
              house={character.house}
              actor={character.actor}
              image={character.image}
              species={character.species}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default HarryPotterViewer;