import React from "react";



interface GreetingProps {
    name? : string;


}

interface GreetingState {
    message: string;
}

export default class Greeting extends React.Component<GreetingProps, GreetingState> {


    constructor(props: GreetingProps) {
        super(props);
        this.state = {
            message: `Hello from, ${props.name}`
        }
    }

    static getDerivedStateFromProps(props: GreetingProps, state: GreetingState) {
        console.log(props, state);
        if (props.name && props.name !== state.message) {
            const newState = { ...state };
            newState.message=
                Greeting.getNewMessage(props.name);
            return newState;
        }
        return state;
    }

    render() {
        console.log("rendering Greeting")
        if (!this.props.name) {
            return <div> no name given 으아아아아ㅏ아아아아아아ㅏ아아아</div>;
        }
        return <div>
            {this.state.message}
        </div>;
    }

    private static getNewMessage(name: string) {
        return "";
    }
}



