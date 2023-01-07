const React = require('react')

class Index extends React.Component {
    render() {
        const { allMysteries } = this.props

        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../index.css" />
                <h1> Don't Go Alone Take These... Mystery Items </h1>
                <ul>
                    {allMysteries.map((store, i) => {
                        return (
                            <li>
                                <a href={`/mysteries/${store.id}`}>{store.name.charAt(0).toUpperCase() + store.name.slice(1)}</a>
                            </li>
                        )
                    })}
                </ul>
                <nav>
                    <a href='/mysteries/new'>Search for a New Mystery Item</a> | <a href="/">Home</a>
                </nav>

            </div>
        )
    }
}

module.exports = Index