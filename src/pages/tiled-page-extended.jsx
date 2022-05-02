import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../components/page-title";
import PageLayout from "../components/page-layout";
import Content from "../components/content";
import BackButton from "../components/back-button";
import HeroImage from "../components/hero-image";

const TiledPageExteded = ({ tiles }) => {
  const { slug } = useParams();
  const [tile, setTile] = useState(null);

  useEffect(() => {
    if(!tiles) return;
    const tileToSet = tiles.find((item) => item.tile.slug === slug);
    setTile(tileToSet);
  }, [tiles]);
  
  if(!tiles) return;

  return <PageLayout>
    <Content>
      <BackButton target="/"/>
      { tile && tile.tile.title &&
        <PageTitle content={ tile.tile.title } />
      }
      { tile && tile.tile.hero_image &&
        <HeroImage image={ tile.tile.hero_image } />
      }
      { tile && tile.tile.content_extended &&
        <div dangerouslySetInnerHTML={{__html: tile.tile.content_extended }}></div>
      }
    </Content>
  </PageLayout>
};

export default TiledPageExteded;