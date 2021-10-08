import React, {Component} from "react";
import NaviItem from "../navi-item";
import './navigation.css';


export default class Navigation extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <ul>
                    <li>
                        <NaviItem />
                    </li>
                </ul>
            </div>
            )
    }
}




