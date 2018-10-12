import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';

// This is a good place to add styles present across all pages
// Layouts, basically
class Page extends Component {
  render() {
    return (
      <div>
        <Meta />
        <Header />
        {this.props.children}
      </div>
    );
  }
}

export default Page;
