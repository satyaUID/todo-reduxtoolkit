import React from 'react'
import Calendar from '../../assets/svg/calendar'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='p-3' style={{
        background: '#9395D3',
        height: 118,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }}>
        <h1 style={{
            color: '#FFF',
            fontFamily: 'Jost',
            fontSize: '24px',
            fontWeight: 600,
            textTransform: 'uppercase',
        }}><Link to="">ToDo App</Link></h1>
        <span style={{
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#FFF',
        }}>
            <Calendar />
            <span style={{
                position: 'absolute',
                marginTop: 3,   
            }}> {new Date().getDate()}</span>
        </span>
    </header>
  )
}

export default Header