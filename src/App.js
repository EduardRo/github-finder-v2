import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import ClearForm from './components/users/ClearForm';
import './App.css';

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    //console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data, loading: false });
  }
  // Search Github users
  searchUsers = async (text) => {
    console.log(text);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
      ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    this.setState({ users: res.data.items, loading: false });
  };

  clearForm = () => this.setState({ users: [], loading: false });

  setAlert = (msg, type) => {
    //console.log(msg);
    this.setState({ alert: { msg: msg, type: type } });
    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar icon='fab fa-github fa-fw' title='Github Search' />

          <div className='container'>
            <Alert alert={this.state.alert} />
            <h1 className='text-center'>Hello bitches!</h1>
            <Search searchUsers={this.searchUsers} setAlert={this.setAlert} />
            <ClearForm
              clearUsers={this.clearForm}
              showClear={this.state.users.length > 0 ? true : false}
            />
            <Users loading={this.state.loading} users={this.state.users} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
