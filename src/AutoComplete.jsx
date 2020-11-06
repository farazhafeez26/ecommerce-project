import React from "react";

// JS CLass Component
// Functional Components
class AutoComplete extends React.Component {
  constructor(props) {
    // build state
    // receive props
    super(props); // this.props
    this.state = {
      allItems: ["Men", "Women", "Children"],
      showItems: ["Men", "Women", "Children"],
      showDropdown: false,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log("is changing");
    const searchQuery = event.target.value;
    // filter
    const { showDropdown, showItems, allItems } = this.state;
    const newShownItems = allItems.filter((item) => item.toLowerCase().startWith(searchQuery.toLowerCase()));

    this.setState({
      ...this.state, // old state
      showDropdown: true,
      showItems: newShownItems
    });
  }

  render() {
    const { showDropdown, showItems, allItems } = this.state; // inline deconstruction
    return (
      <div>
        <input
          type="text"
          placeholder="category"
          onChange={(e) => this.onChange(e)}
        />{" "}
        {/* magic code also here */}
        {showDropdown && showItems.map((item) => <p>{item}</p>)}
      </div>
    );
  }
}

export default AutoComplete;
