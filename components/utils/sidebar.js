import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import Link from "next/link";

function SideBar(props){
    return (
        <Menu>
            <Link className="menu-item" href="/">
                Home
            </Link>

            <Link className="menu-item" href="/#">
                Laravel
            </Link>

            <Link className="menu-item" href="/angular">
                Angular
            </Link>

            <Link className="menu-item" href="/react">
                React
            </Link>

            <Link className="menu-item" href="/vue">
                Vue
            </Link>

            <Link className="menu-item" href="/node">
                Node
            </Link>
        </Menu>
    );
}

export default SideBar;