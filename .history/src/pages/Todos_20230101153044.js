import React from 'react'
import checkbox from '../assests/check.svg'
import { RxBell } from 'react-icons/rx'
import { GoSignIn } from 'react-icons/go'

function Todos() {
    return (
        <div className='container'>
            <div className='todos-wrapper'>
                <nav className='nav-bar'>
                    <p className='username'>username</p>
                    <div className='bell-icon-signin-container'>
                        <div className='bell-icon-bell-num-container'>
                            <RxBell className='bell-icon' />
                            <p className='bell-num'>125</p>
                        </div>
                        <div className='signin-icon-signin-text-container'>
                            <GoSignIn className='signin-icon' />
                            <p className='signin-text'>Sign In</p>
                        </div>

                    </div>
                </nav>
                <div className='salutation-container'>
                    <h2 className='good-text'>Good</h2>
                    <h2 className='morning-text'>Morning</h2>
                </div>

                <div className='day-to-percent-container'>
                    <div className='day-date-container'>
                        <p className='day'>Today's Monday</p>
                        <p className='date'>Dec 31, 2022</p>
                    </div>
                    <div className='percent-completed-container'>
                        <p className='percent'>75% Done</p>
                        <p className='completed'>Completed tasks</p>
                    </div>
                </div>
                <main className='main'>
                    <div className='tasks-to-boards-container'>
                        <div className='tasks-num-tasks-container'>
                            <p className='tasks-num'>12</p>
                            <p className='tasks'>Tasks</p>
                        </div>
                        <div className='boards-num-boards-container'>
                            <p className='boards-num'>3</p>
                            <p className='big-boards'>Boards</p>
                        </div>
                    </div>
                    <div className='line-tasks-ine-boards-container'>
                        <hr className='line-tasks'></hr>
                        <hr className='line-boards' />
                    </div>

                    <div className='tasks-to-boards-container'>
                        <div className='num-boards-small-boards-container'>
                            <p className='num-boards'>0</p>
                            <p className='small-boards'>Boards</p>
                        </div>
                        <div className='boards-num-boards-container'>
                            <p className='active'>Active</p>
                            <p className='done'>Done</p>
                        </div>
                    </div>
                    <div className='todos-container'>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>
                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                        <div>
                            <div className='task-titlecheck-circle-icon-container'>
                                <p className='task-title'>Work on my projetct</p>
                            </div>

                            <img className='check-circle-icon' src={checkbox} alt='check-circle' />
                        </div>
                    </div>

                </main>
            </div>
        </div>
    )
}

export default Todos
