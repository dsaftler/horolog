import React from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { useBlockForm } from './CustomHooks'

const Block = () => {
    const projectId=999;
    const clientId=888;
    const userId=777;
    const block = () => { alert(`Block Added to Horolog!  Name: ${inputs.firstname} ${inputs.lastname} Email: ${inputs.email}`) }
    const { inputs, handleInputChange, handleSubmit } = useBlockForm(block);  
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Blocks</h1>
            <Link to={'/'}>
              <button variant="raised">
                Home
                </button>
            </Link>
            {/* <form onSubmit={handleSubmit}> */}
            <form action='/blocks/create' method='POST'>
              <select value={clientId} onChange={handleInputChange} value={inputs.value}>
                <option value={1}>Mind 4 Hire</option>
                <option value={2}>SpareTime Productions</option>
                <option value={3}>TitleWrite</option>
                <option value={4}>Universal Auto Hail Repair</option>
              </select>
              <select value={projectId} onChange={handleInputChange} value={inputs.value}>
                <option value={1}>Project 1</option>
                <option value={2}>Project 2</option>
                <option value={3}>Project 3</option>
                <option value={4}> Project 4</option>
              </select>
              <div>
                <label>Task Notes</label>
                <TextareaAutosize name='notes' onChange={handleInputChange} value={inputs.notes}></TextareaAutosize>
              </div>
              <div>
                <RadioGroup aria-label="currclass" name="currclass" value={""} onChange={handleInputChange} value={inputs.value}>
                  <FormControlLabel
                    value="DEV"
                    control={<Radio />}
                    label="DEV"
                    labelPlacement="top"
                  />
                  <FormControlLabel
                    value="O&E"
                    control={<Radio />}
                    label="O&E"
                    labelPlacement="top"
                  />
                </RadioGroup>
              </div>
              <div>
               <button type='Start Timmer'>Save</button>
              </div>
          
            </form>
          </Jumbotron>
        </Col>
      </Row>          
    </Container>
  );
}

export default Block;