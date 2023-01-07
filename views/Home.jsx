const React = require("react")


class Home extends React.Component {
    render() {
        return (
            <div className="main">
                <link rel="stylesheet" type="text/css" href="../home.css" />
                <div>
                    <h1>Welcome to The Blunt Mystery Item Store</h1>
                    <h3>
                        In the world of fantasy, you'll be needing all sorts of items to conquer the lands.<br/>
                         Click on "Blunt's Mystery Items" to find items to take on your adventure. 
                    </h3>
                    <a href="/mysteries" className="button">Blunt's Mystery Items</a>
                </div>
                <div className='copyright'>
                    <span>&copy; Moses Blount</span>
                </div>

            </div>
        )
    }
}
module.exports = Home