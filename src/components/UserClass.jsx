import React from "react"

class UserClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "Default",
                avatar_url: "Default"
            }
            // count: 0,
            // count2: 2
        }
        console.log("Constructor")
    }

    async componentDidMount() {
        // Used for API Calls
        const data = await fetch(" https://api.github.com/users/chandrakant121")
        const json = await data.json()
        this.setState({
            userInfo: json
        })
        console.log(json)
    }

    componentDidUpdate() {
        console.log("componentDidUpdate")
    }

    componentWillUnmount() {
        console.log("componentWillUnmount")
    }

    render() {
        // console.log("Render")
        // const { name } = this.props
        // const { count, count2 } = this.state
        const { name, location, avatar_url } = this.state.userInfo

        return <div className="user-card">
            {/* <h1>count:{count}</h1>
            <button onClick={() => {
                this.setState({
                    count: this.state.count + 1,
                    count2: this.state.count2 + 2
                })
            }}>
                Count Increase
            </button>
            <h1>count_2:{count2}</h1>
            <h2>Name:{name}</h2> */}
            <img src={avatar_url} alt="" />
            <h2>Name: {name}</h2>
            <h3>Location: {location}</h3>
            <h4>Contact: csjoshi989@gmail.com</h4>
        </div>
    }
}

export default UserClass
