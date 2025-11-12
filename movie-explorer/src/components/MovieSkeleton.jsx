

const MovieSkeleton = () => {

    return (
      <div className="movie-list">
        {["", "", "", "", ""].map((_,i) => (
          <div className="movie-skeleton" key={i}>
            <div className="poster shimmer"></div>
            <div className="info">
              <div className="title shimmer"></div>
              <div className="year shimmer"></div>
              <div className="year shimmer center"></div>
            </div>
          </div>
        ))}
      </div>
    );
}

export default MovieSkeleton