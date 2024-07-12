import React from "react";
import {
  Container,
  Video,
  MoviesContent,
  VideoDetails,
} from "../components/Main";
import { TMDBMedia } from "../constant/TMDB";
import { Link } from "react-router-dom";
import TMDB_API_OPTION from "../config/tmdbConfig";
import useApi from "../hooks/useApi";
import ShimmerComponent from "../shimmer/Shimmer";

const BrowserPage = () => {
  const { state, isLoading } = useApi(TMDBMedia[0].api, TMDB_API_OPTION);

  const mediaMang = state?.results[0];
  const mediaType = mediaMang?.media_type;
  const mediaId = mediaMang?.id;

  if (!state || !state.results || state.results.length === 0) {
    return <ShimmerComponent/>;
  }

  return isLoading ? (
    <ShimmerComponent />
  ) : (
    <div className="bg-black relative">
      <Container>
        <div className="text-white">
          <div className="relative">
            <Video
              media_id={mediaId}
              media_type={mediaType === "tv" ? "tv" : "movie"}
            />
          </div>
          <div className="absolute top-0 sm:py-[190px] z-30 py-[60px]">
              <VideoDetails
                title={mediaMang?.title}
                desc={mediaMang?.overview}
              />
          </div>

          <div className="relative z-20 flex flex-col sm:-mt-[38px] sm:bottom-10">
            {TMDBMedia.map((item) => (
              <MoviesContent
                key={item.id}
                title={item.title}
                data={item.api}
                className="overflow-hidden scroll-smooth items-center overflow-y-hidden flex gap-5 bg-black bg-opacity-40"
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default BrowserPage;
