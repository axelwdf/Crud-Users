import React from "react";
import './userList.css';

const UsersList = ({UsersData, selecUSer, UserDelete}) => {
    return(
        <div className='UsersList' >
            {
                UsersData.map((userData) => (
                    <div key={userData.id} className='userList' > 
                        <><h2>Usuario</h2>
                        <ul>
                            {/* email */}
                            <li>
                                <b> Correo: </b> {userData.email}
                            </li>

                            {/* first_name */}
                            <li>
                                <b> Nombre: </b> {userData.first_name}
                            </li>

                            {/* last_name */}
                            <li>
                                <b> Apellidos: </b> {userData.last_name}
                            </li>

                            {/* birthday */}
                            <li>
                                <b> Fecha de nacimiento: </b> {userData.birthday}
                            </li>
                        </ul></>
                        <button onClick={() => selecUSer(userData)}  className='icon' >
                            <svg xmlns="http://www.w3.org/2000/svg"  class="pencil-square" viewBox="0 0 16 16">
                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                            <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                            </svg>
                        </button>

                        {/* delete */}
                        <button onClick={() => UserDelete(userData.id)} className='icon' >
                            <svg xmlns="http://www.w3.org/2000/svg"   class="pencil-square" viewBox="0 0 16 16">
                            <path d="M0 3a2 2 0 0 1 2-2h7.08a2 2 0 0 1 1.519.698l4.843 5.651a1 1 0 0 1 0 1.302L10.6 14.3a2 2 0 0 1-1.52.7H2a2 2 0 0 1-2-2V3zm9.854 2.854a.5.5 0 0 0-.708-.708L7 7.293 4.854 5.146a.5.5 0 1 0-.708.708L6.293 8l-2.147 2.146a.5.5 0 0 0 .708.708L7 8.707l2.146 2.147a.5.5 0 0 0 .708-.708L7.707 8l2.147-2.146z"/>
                            </svg>
                        </button>

                    </div>
                ))
            }
        </div>
    );
}

export default UsersList;