const React = require('react')

class Show extends React.Component {
    render() {
        const { mysteries } = this.props
        // Couldn't figure out why the Buy button and delete wouldn't work so commented it out
        // const renderForm = () => {
        //             if (mysteries.quantity > 0) {
        //         return <div><form action={`/mysteries/buy/${mysteries.id}?_method=PUT`} method="POST">
        //                 <input type="submit" value=" Buy " />
        //             </form>
        //             </div>
        //     } else {
        //         return <h3>Out Of Stock</h3>
        //     }
        // } 
        return (
            <div>
                <link rel="stylesheet" type="text/css" href="../show.css" />

                <h1> Here's Your Mystery Item... It is What It Is 🤣 </h1>

                <div className='text-container'>

                    <h2>{mysteries.name.charAt(0).toUpperCase() + mysteries.name.slice(1)}</h2>

                    <img src={mysteries.img} ></img>

                    <p>{mysteries.about}</p>

                    <br />

                    <p id="image">{mysteries.price} Gold</p> 
                    <p>There are currently {mysteries.quantity} {mysteries.name}'s left.</p>
                    {/* {renderForm()} */}

                    <br />

                    <button><a style={{ textDecoration: 'none' }} href={`/mysteries/${mysteries.id}/edit`}>Edit Mystery Item</a></button>

                    {/* <form action={`/mysteries/${mysteries.id}?_method=DELETE`} method="POST">
                        <input type="submit" value="DELETE" />
                    </form> */}

                    <br />

                    <a href='/mysteries/new'>Search for a new Mystery Item</a> | <a href="/mysteries">Back to Blunt Mysteries</a> | <a href="/">Home</a>
                </div>

            </div>
        )
    }
}

module.exports = Show