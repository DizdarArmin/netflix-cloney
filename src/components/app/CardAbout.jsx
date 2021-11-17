export default function CardAbout({ item }) {
  return (
    <div className="about">
      <div className="about-left">
        <div className="left-line">
          <div className="about-year">{item.year}</div>
          <div className="about-age">16+</div>
          <div className="season-amount"></div>
          <div className="hd">HD</div>
        </div>
        <div className="description">{item.description}</div>
      </div>

      <div className="about-right">
        <div className="cast">
          Cast: <span>{item.cast}</span>
        </div>

        <div className="genres">
          Genres: <span>{item.genres}</span>
        </div>
        <div className="is">
          This is: <span>{item.about}</span>
        </div>
      </div>
    </div>
  );
}
