const React = require('react')

// As you can see we are using the app layout

class Edit extends React.Component {
    render() {
        return (
            //     {/* See the Layout takes in a prop called Title and we pass Edit Page to it  note: comments can't go first or last in  jsx return*/}
            //     {/* form is not complete we will do that below*/}
                <form action={`/mysteries/${this.props.mysteries.id}?method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.mysteries.name} /><br />
                    Img: <input type="text" name="img" defaultValue={this.props.mysteries.img} /><br />
                    About: <input type="text" name="about" defaultValue={this.props.mysteries.about} /><br />
                    Qauntity: <input type="number" name="quantity" defaultValue={this.props.mysteries.number} /><br />
                    Price: <input type="number" name="price" defaultValue={this.props.mysteries.number} /><br />
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
        )
    }
}
module.exports = Edit