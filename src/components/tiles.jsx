import React from "react";
import * as styles from "./tiles.module.scss";
import { useNavigate } from "react-router-dom";

const Tiles = ({ tiles }) => {
  let navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/stab/${id}`);
  };

  console.log(tiles);
  const renderTiles = () => {
    console.log(tiles);
    return tiles.map((item, index) => {
      return <div key={ `tile_${index}` } className={ styles.content } onClick={ () => handleClick(item.tile.slug) } dangerouslySetInnerHTML={{ __html: item.tile.content }}>
      </div>
    });
  };

  return (
    <div className={ styles.container }>
      <div className={ styles.grid }>
        { tiles && renderTiles() }
      </div>
    </div>
  )
};

export default Tiles;