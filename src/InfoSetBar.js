import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

export default function InfoSetBar(props) {
  let [values, setValues] = React.useState({
    searchString: "",
    age: 10,
    other: "something else"
  });
  const handleChange = event => {
    //see fb.me/react-event-pooling : SyntheticEvent will nullified after event
    // been called, So you cannot access the event in an asynchronous way.
    // setValues can't access e.target, Using temp variable to hold target value
    let name = event.target.name;
    let value = event.target.value;
    setValues(oldValues => {
      let newValues = {
        ...oldValues,
        [name]: value
      };
      console.log(newValues); // anything to do with new value need to do here
      if (["age"].includes(name)) {
        props.action(newValues);
      }
      return newValues;
    });
  };
  const onKeyPress = e => {
    if (e.key === "Enter") {
      console.log("Enter key pressed");
      console.log(values);
      props.action(values);
      // write your functionality here
    }
  };
  return (
    <Container
      style={{ display: "flex", "align-items": "flex-end", margin: "10px" }}
    >
      <TextField
        id="standard-search"
        label="Search field"
        name="searchString"
        type="search"
        margin="normal"
        value={values.searchString}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        style={{ "margin-bottom": 0 }}
      />
      <Select
        value={values.age}
        onChange={handleChange}
        inputProps={{
          name: "age",
          id: "age-simple"
        }}
      >
        <MenuItem value={10}>Ten-------------------</MenuItem>
        <MenuItem value={20}>Twenty----------------</MenuItem>
        <MenuItem value={30}>Thirty----------------</MenuItem>
      </Select>
      <Button
        variant="outlined"
        onClick={() => {
          props.action(values);
        }}
      >
        Click
      </Button>
    </Container>
  );
}
