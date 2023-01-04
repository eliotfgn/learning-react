let cards = data.map((card, i) => {
    return <Card key={i} data={card} />
});

ReactDOM.render(
    <div className="row">{cards}</div>,
    document.getElementById('root')
);