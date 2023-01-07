const React = require('react')

class Edit extends React.Component {
    render() {
        return (
            <div> 
                <link rel="stylesheet" type="text/css" href="/edit.css" />
                <form action={`/mysteries/${this.props.mysteries.id}?method=PUT`} method="POST">
                    Name: <input type="text" name="name" defaultValue={this.props.mysteries.name} /><br />
                    Img: <input type="text" name="img" defaultValue={this.props.mysteries.img} /><br />
                    About: <input type="text" name="about" defaultValue={this.props.mysteries.about} /><br />
                    Qauntity: <input type="number" name="quantity" defaultValue={this.props.mysteries.number} /><br />
                    Price: <input type="number" name="price" defaultValue={this.props.mysteries.number} /><br />
                    <br />
                    <input type="submit" value="Submit Changes" />
                </form>
            </div>
        )
         
    }
}
module.exports = Edit