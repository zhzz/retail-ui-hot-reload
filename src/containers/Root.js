import React from 'react'
import { hot } from 'react-hot-loader/root'
import Button from '@skbkontur/react-ui/components/Button';
import MenuItem from '@skbkontur/react-ui/components/MenuItem';
import MenuHeader from '@skbkontur/react-ui/components/MenuHeader';
import DropdownMenu from '@skbkontur/react-ui/components/DropdownMenu';
import Dropdown from '@skbkontur/react-ui/components/Dropdown';
import Modal from '@skbkontur/react-ui/components/Modal';
import Toggle from '@skbkontur/react-ui/components/Toggle';
import Input from '@skbkontur/react-ui/components/Input';
import Group from '@skbkontur/react-ui/components/Group';
import Gapped from '@skbkontur/react-ui/components/Gapped';

class Root extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false
    }
  }

  render() {
    const { modal } = this.state;
    return (
      <Gapped gap={20}>
        <DropdownMenu caption={<Button>DropdowMenu</Button>}>
          <MenuHeader>Заголовок меню</MenuHeader>
          <MenuItem>Раз</MenuItem>
          <MenuItem>Два</MenuItem>
          <MenuItem>Три</MenuItem>
        </DropdownMenu>
        <Dropdown caption="Dropdown">
          <MenuItem onClick={() => alert('Clack')}>Clack</MenuItem>
          <MenuHeader>Here goes the header</MenuHeader>
          <MenuItem comment="With comment.">
            Pow
          </MenuItem>
        </Dropdown>
        <div>
          <Button onClick={() => this.setState({ modal: !modal })}>Modal</Button>
          {modal && (
            <Modal onClose={() => this.setState({ modal: false })}>
              <Modal.Header>Title</Modal.Header>
              <Modal.Body>
                <p>Use rxjs operators with react hooks</p>
              </Modal.Body>
              <Modal.Footer panel={true}>
                <Button onClick={() => this.setState({ modal: false })}>Close</Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
        <Group width={400}>
          <Button size="large">Ok</Button>
          <Input size="large" mainInGroup />
        </Group>
      </Gapped>
    )
  }
}

export default hot(Root)
