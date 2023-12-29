const heading = React.createElement(
    "div",
    { id:"parent" },
    [ React.createElement("div",{id:"child"},
    [React.createElement("h1",{},"Iam an h1 tag"),
    React.createElement("h2",{},"Iam an h2 tag")]
    ),
    React.createElement(
        "div",
        { id:"parent" },
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Iam an h1 tag"),
        React.createElement("h2",{},"Iam an h2 tag")]
        )
    )]
    );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
console.log(heading);   ``