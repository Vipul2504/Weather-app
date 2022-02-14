const SearchWeather = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div class="card bg-dark text-center justify-content">
            <img src="https://source.unsplash.com/600*900/?nature,water" class="card-img" alt="..." />
            <div class="card-img-overlay">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">Last updated 3 mins ago</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchWeather;
