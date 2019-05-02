import React from 'react';
import { Link } from 'react-router-dom';

const ArtistsList = props => {
  // console.log(props);

  const list = ({ allArtists }) => {
    // console.log(allArtists);
    if (allArtists) {
      return allArtists.map(item => {
        const style = {
          background: `url('/images/covers/${item.cover}.jpg') no-repeat`
        };
        return (
          <Link
            key={item.id}
            to={`/artist/${item.id}`}
            className="artist_item"
            style={style}
          >
            <div className="artist_name">{item.name}</div>
          </Link>
        );
      });
    }
  };
  return (
    <div className="artists_list">
      <h4>Browse the artists</h4>
      {list(props)}
    </div>
  );
};

export default ArtistsList;
