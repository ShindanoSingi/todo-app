import React from 'react'
import { RxBell } from 'react-icons/rx'
import { GoSignIn } from 'react-icons/go'
import { FcCheckmark } from 'react-icons/fc'

function Todos() {







    let color = "#FEF970"

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
                        <hr className='line-tasks' />
                        <hr className='line-boards' />
                    </div>

                    <div className='num-boards-to-small-boards-container'>
                        <div className='num-boards-small-boards-container'>
                            <p className='num-boards'>0</p>
                            <p className='small-boards'>Boards</p>
                        </div>
                        <div className='active-done-container'>
                            <p className='active'>Active</p>
                            <p className='done'>Done</p>
                        </div>
                    </div>
                    <div className='todos-container'>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>
                        <div style={{ backgroundColor: color }} className='todo-card-card-date-container'>
                            <div className='todo-card'>
                                <p className='task-title'>gdfgdfgdfgdfgdfgdfgdfg</p>
                                < FcCheckmark className='check-circle-icon' />
                            </div>
                            <p className='card-date'>Jan. 01, 2023</p>
                        </div>


                    </div>

                </main>
            </div>
        </div>
    )
}

export default Todos
