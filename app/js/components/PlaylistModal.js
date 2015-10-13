'use strict';

import React, {Component} from 'react';
import {close} from '../actions/ModalActions';

class PlaylistModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      playlistName: '',
      public: true
    }
  }

  _handleClose() {
    close();
  }

  _handleSave() {
    const playlistName = React.findDOMNode(this.refs.playlistName).value;
    if (playlistName.length > 3) {
      console.log(text)
      // save(text);
    }
  }

  _handlePublic(status) {
    this.setState({
      public: status
    })
  }

  render() {
    return <div className='playlist-modal'>
              <div className="modal-container">
                  <h2>Create Playlist</h2>
                  <div>
                      <input type='text' placeholder='Name' className='playlist-name' ref='playlistName'/>
                  </div>
                  <div>
                      <input type='radio' name='public' value='true' onChange={this._handlePublic.bind(this, true)} checked='true'/>Public
                      <input type='radio' name='public' value='false' onChange={this._handlePublic.bind(this, false)}/>Private
                  </div>

                  <div>
                      <button className='btn-search' type='button' onClick={this._handleSave.bind(this)}>Save</button>
                      <button className='btn-search' type='button' onClick={this._handleClose}>Cancel</button>
                  </div>
              </div>
         </div>
  }
}

export default PlaylistModal;
