/* eslint-disable react/prop-types */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ChatActions from '../store/actions/chatActions';
import Chat from './Chat';
import Sidebar from './Sidebar';

const Layout = ({ chat, chatActions }) => {
  return (
    <div className="layout">
      <div className="layout__content">
        <Chat messages={chat} sendMessage={chatActions} />
      </div>

      <div className="layout__sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    chat: state.chat,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    chatActions: bindActionCreators(ChatActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
