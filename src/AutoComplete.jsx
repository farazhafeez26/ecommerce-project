import React from "react";

// JS CLass Component
// Functional Components

import styled from "styled-components";
class AutoComplete extends React.Component {
  constructor(props) {
    // build state
    // receive props
    super(props); // this.props
    this.state = {
      allItems: [
        "Men",
        "Men Shirts",
        "Men Shoes",
        "Women",
        "Children",
        "Summer Wear",
        "Winter collection",
      ],
      showItems: [
        "Men",
        "Women",
        "Children",
        "Summer Wear",
        "Winter collection",
      ],
      showDropdown: false,
      searchQueryValue: "",
    };

    // connecting the this object inside onChange to the class instance
    // this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    console.log("is changing");

    const searchQuery = event.target.value;

    if (searchQuery == "") {
      this.setState({
        ...this.state,
        showDropdown: false,
        searchQueryValue: searchQuery,
      });
    } else {
      // filter
      const allItems = this.state.allItems;

      const newShownItems = allItems.filter((item) =>
        item.toLowerCase().startsWith(searchQuery.toLowerCase())
      );

      // Object destrucuting
      this.setState({
        ...this.state, // old state
        showDropdown: true,
        showItems: newShownItems,
        searchQueryValue: searchQuery,
      });
    }
  }

  onClickItem(event, item) {
    console.log(item);
    this.setState({
      ...this.state,
      searchQueryValue: item,
      showDropdown: false,
    });
  }
  // Homework
  // Hide the dropdown
  // add the content of the dropdown to the searh bar

  render() {
    const showDropdown = this.state.showDropdown; // inline deconstruction
    const showItems = this.state.showItems; // inline deconstruction
    const searchQueryValue = this.state.searchQueryValue; // inline deconstruction
    return (
      <div>
        <InputField
          type="text"
          value={searchQueryValue}
          placeholder="category"
          onChange={(e) => this.onChange(e)} //event listener
        />
        {/* magic code also here */}
        {/* logical operator && decides when the dropown will be displayed */}
        {showDropdown && (
          <DropDownContainer>
            {showItems.map((item) => (
              <ItemDisplay onClick={(e) => this.onClickItem(e, item)}>
                {item}
              </ItemDisplay>
            ))}
          </DropDownContainer>
        )}
      </div>
    );
  }
}

export default AutoComplete;

const DropDownContainer = styled.div`
  position: fixed;
  background-color: white;
  width: 300px;
`;

const InputField = styled.input`
  height: 30px;
  width: 300px;
`;

const ItemDisplay = styled.div`
  background-color: white;
  &:hover {
    background-color: red;
  }
`;
