class Unlike_Button extends React.Component{
    constructor(props) {
        super(props);
        this.state = { liked: false };
    }

    render = () => {

        if (this.state.liked){
            return(
                <div>
                    "Gefällt mir nicht mehr."
                </div>
            )
        }
        return (
            <div>
                <button onClick={() => this.setState({ liked: true }) }>Gefällt mir nicht mehr!</button>

            </div>

        );
    }
}