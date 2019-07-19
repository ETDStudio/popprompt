import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className="main__image" src="https://img1.ak.crunchyroll.com/i/spire1/4538a7dd0c49bbfb0cae75771e895e651485562924_full.jpg" />
      <article className="card">
        <img src="https://vignette.wikia.nocookie.net/haikyuu/images/b/b9/Tsukishima_square_crop.png/revision/latest/scale-to-width-down/150?cb=20171217191238" />
        <h3 className="card__header--title">Tsuki</h3>
        <p><strong>School:</strong> Karasuno</p>
        <p><strong>Likes:</strong> Dinosaurs</p>
      </article>
    </div>
  );
}

export default App;
