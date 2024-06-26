import React, { useEffect } from "react";

import "./Cast.styles.scss";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import LazyImage from "../../../components/lazyLoadImage/LazyImage";
import FallbackPoster from "../../../assets/images/avatar.png";

const Cast = ({ cast, castLoading }) => {
  const castListSorted = cast?.sort((a, b) => a.popularity > b.popularity);

  const BASE_URL = "https://image.tmdb.org/t/p/original";

  return (
    <div className="castContainer section">
      <ContentWrapper>
        <p className="sectionTitle">Top Cast</p>
        {!castLoading && (
          <div className="castItems">
            {castListSorted?.map((member) => {
              return (
                <div className="castItem" key={member.id}>
                  <div className="pictureContainer">
                    <LazyImage
                      src={
                        !member?.profile_path
                          ? FallbackPoster
                          : `${BASE_URL}/${member?.profile_path}`
                      }
                    />
                  </div>
                  <p className="name">{member?.name}</p>
                  <p className="character">{member?.character}</p>
                </div>
              );
            })}
          </div>
        )}
      </ContentWrapper>
    </div>
  );
};

export default Cast;
