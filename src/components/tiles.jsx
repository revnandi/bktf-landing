import React from "react";
import * as styles from "./tiles.module.scss";

const Tiles = ({ tiles }) => {

  const renderTiles = () => {
    return tiles.map((item, index) => {
      return <div key={ `tile_${index}` } className={ styles.content } dangerouslySetInnerHTML={{ __html: item.tile.content }}>
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