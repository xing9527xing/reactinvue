import { Component } from "react";
import { GetWbsDataAsyn } from "./http/url";

class Kai extends Component {

    componentDidMount() {
        GetWbsDataAsyn({ Id: "00000000-0000-0000-0000-000000000000" }).then(
            (res) => {
                console.log("get article response:", res);
            },
            (error) => {
                console.log("get response failed!");
            }
        );
    }
    render() {
        return (
            <h1>mycomponent</h1>
        );
    }
}


export default Kai;