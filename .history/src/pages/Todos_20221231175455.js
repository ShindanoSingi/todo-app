import React from 'react'

function Todos() {
    return (
        <div className='container'>
            <div className='todos-wrapper'>
                <nav className='nav-bar'>NavBar</nav>
                <main>
                    <h2>Good Morning</h2>
                    <div>
                        <div>
                            <p className='day'>Today's Monday</p>
                            <p className='date'>Dec 31, 2022</p>
                        </div>
                        <div>
                            <p className='board-number'>3</p>
                            <p className='boards'>Dec 31, 2022</p>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Todos
