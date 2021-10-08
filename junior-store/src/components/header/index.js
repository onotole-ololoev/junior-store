import React, {Component} from "react";






import './header.css'
import Wrapper from "../wrapper";
import Navigation from "../navigation";


export default class Header extends Component {
    constructor() {
        super();
    }
    render() {
        <div>
            <Wrapper>
                <Navigation />
                <Logo />
                <Actions />
            </Wrapper>
        </div>

    }
}