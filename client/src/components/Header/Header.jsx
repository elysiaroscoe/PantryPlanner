import React from 'react'
import './Header.css';

const Header = () => {
    return (
        <div className='Header container'>
            <h1>PantryPlanner</h1>
            <table className='Navigation'>
                <tr>
                    <td>
                        <a href="/" className='navButton'>Home</a>
                    </td>
                    <td>
                        <a href="/list" className='navButton'>Store</a>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default Header