import React, { useState } from "react";
import { Link } from "react-router-dom";
// import Select from 'react-select';
// import Creatable from 'react-select/creatable';
// import makeAnimated from 'react-select/animated';
// import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import {useProjectForm} from "./CustomHooks.jsx"
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";


function Project() {
  const project = () => {
    alert(`Project ${inputs.brief}`)
  };
  const { inputs, handleInputChange, handleSubmit } = useProjectForm(project);
  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
              <Link to={'/'}>
                <button variant="raised">
                  Home
                </button>
              </Link>
            <h1>Project</h1>
            <form action='projects/clients/1' method='POST'>
              <div>
                <label>Client</label>
                <select onChange={handleInputChange} value={inputs.value}>
                  <option value='Mind 4 Hire'>Mind 4 Hire</option>
                  <option value='SpareTime Productions'>SpareTime Productions</option>
                  <option value='TitleWrite'>TitleWrite</option>
                  <option value='Universal Auto Hail Repair'>Universal Auto Hail Repair</option>
                </select>
              </div>
               <div>
                  <label>Brief Description</label>
                  <input type='text' name='brief' onChange={handleInputChange} value={inputs.brief} required />
               </div>
               <div>
                <label>Full Description</label>
                <TextareaAutosize name='narrative' onChange={handleInputChange} value={inputs.narrative}></TextareaAutosize>
                </div>
              <div>
                  <RadioGroup aria-label="defclass" name="defclass" value={""} onChange={handleInputChange} value={inputs.value}>
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
                <label>Archived: </label>
                {/* //Todo  what is boolean?  how to call the data */}
                  <input type="checkbox" name="is_archived" onChange={handleInputChange} value={inputs.is_archived} />
              </div>
              <button type='submit'>Save</button>
            </form>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );

}

export default Project;