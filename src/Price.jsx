import React from "react";

class Price extends React.Component {
  render() {
    const { value } = this.props;
    return <h4 className="price-tag">{value} $ </h4>;
  }
}

export default Price;
