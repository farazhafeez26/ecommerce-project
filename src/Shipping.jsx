import React from "react";

class Shipping extends React.Component {
  render() {
    const { value } = this.props;

    return <h4>{value}</h4>;
  }
}

export default Shipping;
