import React, { Component, useState, useEffect } from 'react';
import Senators from "./senators.json"; //import React Component

const EXAMPLE_SENATORS = [  
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export const App = (props) => {
  return (
    <div className={'app container'}>
      <h1>US Senators 2019</h1>
      <SenatorTable senators={props.senators} />
    </div>
  )
}

export const SenatorTable = (props) => {
  return (
    <table className={'table table-bordered'}>
      <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']} />
      <tbody>
        {props.senators && props.senators.map((x, index) => {
          return <SenatorRow senator={x} key={index}/>
        })}
      </tbody>
    </table>
  )
}

export const TableHeader = (props) => {

  return (
    <thead>
      <tr>
        {props.cols && props.cols.map((x, index) => {
          return (<th key={index}>{x}</th>)
        })}
      </tr>
    </thead>
  )

}

export const SenatorRow = (props) => {
  return (
    <tr>
      {props.senator && <td>{props.senator.name}</td>}
      {props.senator && <td>{`${props.senator.party.charAt(0).toUpperCase()} - ${props.senator.state}`}</td>}
      {props.senator && <td><a href={`tel:${props.senator.phone}`}>{props.senator.phone}</a></td>}
      {props.senator && <td><a href={`https://twitter.com/${props.senator.twitter}`}>@{props.senator.twitter}</a></td>}
    </tr>
  )
}