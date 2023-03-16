import React from 'react'
import Cartsummary from "./Cartsummary";
import { Button, Container,  Menu } from 'semantic-ui-react'
export default function Navi() {
  return (
    <div>
    <Menu inverted fixed='top'>     {/* siyah */}
    <Container>
    <Menu.Item
          name='home'
         
        />
        <Menu.Item
          name='messages'
         
        />

        <Menu.Menu position='right'>
         <Cartsummary></Cartsummary>

          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      
    </Container>
      </Menu>
    </div>
  )
}
