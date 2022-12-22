const React = require("react")

class New extends React.Component {
    render() {
        return (
            <div>
                {/* <link rel="stylesheet" type="text/css" href="../css/style.css" /> */}
                <h1>Find New Mystery Item</h1>
                <form action='/mysteries' method='POST'>
                    Name: <input type='text' name='name' />
                    Img: <input type='text' name='img' />
                    About: <input type='text' name='about' />
                    Quantity: <input type='number' name='quantity' />
                    Price: <input type='text' name='price' />
                    <br />
                    <input type='submit' name='' value='Find Mystery Item' />
                </form>
                <a href="/mysteries">Back to Blunt Mysteries</a>
            </div>
        );
    }
}

module.exports = New