/* eslint-disable react/no-children-prop */
import React from 'react';
import { HashRouter as Router, Route, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatActions from '../store/actions/chatActions';
import Possessions from './Possessions';
import Transactions from './Transactions';

const Sidebar = () => {
  function mapStateForAccounts(state) {
    return {
      items: state.accounts,
    };
  }

  function mapStateForDeposits(state) {
    return {
      items: state.deposits,
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      chatActions: bindActionCreators(ChatActions, dispatch),
    };
  }

  return (
    <Router>
      <div className="sidebar">
        <div className="button-group button-group--centered">
          <NavLink to="/accounts" className="button-group__item" activeClassName="button-group__item--active">
            Счета
          </NavLink>

          <NavLink to="/deposits" className="button-group__item" activeClassName="button-group__item--active">
            Вклады
          </NavLink>
        </div>

        <Route exact path="/accounts" component={withRouter(connect(mapStateForAccounts)(Possessions))} />
        <Route path="/accounts/:id" component={withRouter(connect(mapStateForAccounts, mapDispatchToProps)(Transactions))} />
        <Route exact path="/deposits" component={withRouter(connect(mapStateForDeposits)(Possessions))} />
        <Route path="/deposits/:id" component={withRouter(connect(mapStateForDeposits, mapDispatchToProps)(Transactions))} />
      </div>
    </Router>
  );
};


export default Sidebar;
