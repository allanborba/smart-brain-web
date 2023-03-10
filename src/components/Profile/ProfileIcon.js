import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class ProfileIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dropdownOpen: false };
  }

  toggle = () => { this.setState({ dropdownOpen: !this.state.dropdownOpen }) };

  render() {
    return (
      <div className="pa4 tc">
        <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} drop='left'>
          <DropdownToggle
            tag="span"
            onClick={this.toggle}
            data-toggle="dropdown"
            aria-expanded={this.state.dropdownOpen}
          >
            <img
              // src="http://tachyons.io/img/logo.jpg"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrTuCfbTRwqojU98y-taLj4yZQ5hl6pvAfnQ&usqp=CAU"
              className="br-100 h3 w3 dib" alt="avatar"
            />
          </DropdownToggle>
          <DropdownMenu
            className='b--transparent shadow-5'
            style={{marginLeft: '-6rem', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}
           >
            <DropdownItem onClick={() => this.props.toggleModal()}>View Profile</DropdownItem>
            <DropdownItem onClick={() => this.props.onRouteChange('signout')}>Sign Out</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  }
}

export default ProfileIcon;