class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="https://loremflickr.com/640/360" />
          </div>
          <div className="card-content">
            <p>{this.props.data.course}</p>
            <p>{this.props.data.instructor}</p>
          </div>
          <div className="card-action">
            <a href="#">$9.99</a>
          </div>
        </div>
      </div>
    );
  }
}
