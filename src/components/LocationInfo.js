const LocationInfo = ({ location }) => {
  return (
    <>
      {location.residents ? (
        <div className="dim-info">
          <article>
            <p>Name: {location.name}</p>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </article>
          <article>
            {<span>Residents: {location.residents.length}</span>}
          </article>
        </div>
      ) : (
        <div className="dim-info">
          <article>
            <p>Name: {location.name}</p>
            <p>Type: {location.type}</p>
            <p>Dimension: {location.dimension}</p>
          </article>
          <article>
            <span>Residents: 0</span>
          </article>
        </div>
      )}
    </>
  );
};

export default LocationInfo;
