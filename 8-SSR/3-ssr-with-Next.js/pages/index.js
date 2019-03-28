import React, { Component } from 'react';
import Navbar from '../components/Navbar';

import Link from 'next/link'

class index extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <hr />
                <Link href="topics">Topics</Link>
            </div>
        );
    }
}

export default index;