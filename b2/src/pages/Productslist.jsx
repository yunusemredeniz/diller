import React, { useEffect, useState } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import Productservis from '../services/productservis'

export default function Productslist() {
  const [products,setproducts]=useState([])
  useEffect(()=>{
    let productservis=new Productservis()
    productservis.getproducts().then(result=>setproducts(result.data.data))
  },[])
  return (
    <div> <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>adı</Table.HeaderCell>
        <Table.HeaderCell>fiyatı</Table.HeaderCell>
        <Table.HeaderCell>stok</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {products.map((product)=>
       <Table.Row key={product.id}>
       <Table.Cell>{product.name}</Table.Cell>
       <Table.Cell>{product.fiyat}</Table.Cell>
       <Table.Cell>{product.stok}</Table.Cell>
     </Table.Row>
      )

      }
     
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table></div>
  )
}
