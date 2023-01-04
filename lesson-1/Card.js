function Card(props) {
  return (
    <div className="col s2">
      <div className="card hoverable small">
        <div className="card-image">
          <img src="https://loremflickr.com/640/360" />
        </div>
        <div className="card-content">
          <p>{props.data.course}</p>
          <p>{props.data.instructor}</p>
        </div>
        <div className="card-action">
          <a href="#">$9.99</a>
        </div>
      </div>
    </div>
  );
}
