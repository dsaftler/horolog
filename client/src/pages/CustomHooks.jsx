import  {useState} from 'react' 
import { Redirect } from 'react-router-dom'
import API from "../utils/API";
import axios from 'axios';

export const useClientForm = (callback) => {
  const [inputs, setInputs] = useState({});
  
  const handleFormSubmit = event => {
    event.preventDefault();
    if (inputs.name) {
      API.saveClient({
        name: inputs.name,
       is_archived: inputs.is_archived
      })
      .then(response =>  console.log('Client response' + response.body.id))
      .catch(err => console.log(err))  ;
    }
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleFormSubmit,
    handleInputChange,
    inputs
  };
}

export const useBlockForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  } 
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({...inputs, [event.target.name]: event.target.value}));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export const useSignUpForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
      // if (emailExists(inputs.email)) {
        // //  from inputs: check for existing email, valid fields 
        // //  then pass to Post
        // } else {
          //   // throw an error ?
          // }
          
        }
        callback();
      }
      const handleInputChange = (event) => {
        event.persist();
        setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
      }
      return {
        handleSubmit,
        handleInputChange,
        inputs
      };
    }
export const useLoginForm = (callback) => {
      const [inputs, setInputs] = useState({});
      const handleSubmit = (event) => {
        if (event) {
          event.preventDefault();
        }
        axios
        .post('auth/login', {
          email: inputs.email,
          password: inputs.password})
      .then(response => {
        console.log('login response')
        console.log(response)
        if (response.status === 200) {
          const UserId = response.data.id
        }
      })
      // return <Redirect to={{  }}></Redirect>
      // redirect to Blocks with query
      .catch(error => {
        console.log(`login error: ${error}`)
      })
    }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  const validEmail = (event) => {
    // valid calls get.(users/signup/checkEmailExists)


  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export const useProjectForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export const useTimeSheetForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}
export const useReportForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
}

export const useForm = (callback) => {
  const [inputs, setInputs] = useState({});
  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    callback();
  }
  const handleInputChange = (event) => {
    event.persist();
    setInputs(input => ({ ...inputs, [event.target.name]: event.target.value }));
  }
  return {
    handleSubmit,
    handleInputChange,
    inputs
  };
// export default {
  //   getRecipes: function (query) {
    //     return axios.get("/api/recipes", { params: { q: query } });
    //   }
    // };
} 