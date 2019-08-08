import React, { Component } from "react";
import { Link } from "react-router-dom";

// import PopoverMenu from 'wix-style-react/beta/PopoverMenu';
// import IconButton from 'wix-style-react/IconButton';
// import Calendar from 'wix-style-react/Calendar';
// import TimePicker from 'wix-style-react/TimeInput';
import { Col, Row, Container } from "../components/Grid";
class Time_Sheet extends Component {
  state = {
    bdate: '',
    edate: "",
    client: 0,
    projects: []
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <Container fluid>
        <h1>Time Sheet</h1>
        {/* <Calendar
          // onChange={value => setState({
          //   value
          // })}
          selectionMode="day"
        /> */}
        {/* <TimePicker
          dashesWhenDisabled
          onChange={moment => moment.format("h:mm a")}
        /> */}
        {/* <Layout cols={1} justifyItems="center"> */}
          {/* <PopoverMenu
            triggerElement={
            <TextButton suffixIcon={<Icons.ChevronDown />}>Prefix</TextButton>
            }
              >
            <PopoverMenu.MenuItem text="Add" prefixIcon={<Icons.Add />} />
              <PopoverMenu.MenuItem text="Edit" prefixIcon={<Icons.Edit />} />
              <PopoverMenu.MenuItem
              text="Delete"
                prefixIcon={<Icons.Delete />}
                skin="destructive"
              />
            </PopoverMenu> */}

          {/* </Layout> */}
      </Container>
     );
  }
}
export default Time_Sheet;
