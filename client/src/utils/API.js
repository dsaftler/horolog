import axios from 'axios';

export default {
//#region  CLIENTS
  getClients: function () {
    return axios.get('/clients'); // Gets all clients
  },
  getClientsActive: function () {
    return axios.get('/clients', {
      params: {
        is_archived: 1
      } // Gets active clients
    })
  },
  getClient: function (id) {
    return axios.get('/clients/' + id); // Gets the client with the given id
  },
  updClient: function (id) {
    return axios.put('/clients/' + id, {
       "obj": "obj" 
      // "name": name,
      // "is_archived": is_archived
    }
    )
  },
  deleteClient: function (id) {
    return axios.delete('/clients/' + id,
      { "obj": "obj" }) // Deletes the client with the given id
  },
  saveClient: function(data) {
    return axios.post('/clients', data)
      // "name": name
   
    //  ) // Saves a client to the database
  },
//#endregion 
//#region  PROJECTS
  getProjects: function () {
    return axios.get('/projects'); // Gets all projects
  },
  getProject: function (id) {
    return axios.get('/projects/' + id); // Gets the project with the given id
  },
  updProject: function (id) {
    return axios.put('/projects/' + id, {"obj":"obj"})
  },
  deleteProject: function (id) {
    return axios.delete('/projects/' + id,
      { "obj": "obj" }) // Deletes the project with the given id
  },
  saveProject: function ([]) {
    return axios.post('/projects', { "obj": "obj" }); // Saves a project to the database
  },
//#endregion
//#region  BLOCKS
  getBlocks: function () {
    return axios.get('/blocks'); // Gets all blocks
  },
  getBlock: function (id) {
    return axios.get('/blocks/' + id); // Gets the block with the given id
  },
  updBlock: function (id) {
    return axios.put('/blocks/' + id, { "obj": "obj" })
  },
  deleteBlock: function (id) {
    return axios.delete('/blocks/' + id,
      { "obj": "obj" }) // Deletes the block with the given id
  },
  saveBlock: function ([]) {
    return axios.post('/blocks', { "obj": "obj" }); // Saves a block to the database
  },
//#endregion
//#region  USER
getUsers: function () {
  return axios.get('/users'); // Gets all users
},
getUser: function (id) {
  return axios.get('/users/' + id); // Gets the user with the given id
},
updUser: function (id) {
  return axios.put('/users/' + id, [])
},
deleteUser: function (id) {
  return axios.delete('/users/' + id,
    { "obj": "obj" }) // Deletes the user with the given id
},
saveUser: function ([]) {
  return axios.post('/login', { "obj": "obj" }); // Saves a user to the database
},
//#endregion

};
