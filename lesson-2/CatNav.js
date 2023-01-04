class CatNav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const navList = this.props.data.map((item, index) => {
      return (
        <li key={index} className="cat-link left valign-wrapper">
          <i className="material-icons">{item.icon}</i>
          {item.title}
        </li>
      );
    });

    return (
      <div className="row">
        <ul className="cat-nav center-align">{navList}</ul>
      </div>
    );
  }
}
