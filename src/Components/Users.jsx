import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUser = useLoaderData();
    console.log(loadedUser);
    const [users, setUsers] = useState(loadedUser);

    const handleDelete = id => {
        // make sure is confirm to delete 
        fetch(`http://localhost:5000/user/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if(data.deleteCount > 0){
                    console.log('deleted successfully');
                    // remove the user from UI
                    const remainingUser = users.filter(user => user._id !== id);
                    setUsers(remainingUser);
                }           
            }
            )
}

return (
    <div>
        <h2>Users : {loadedUser.length}</h2>
        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                        <th>Created At</th>
                        <th>Last Logged In</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {/* row 1 */}
                    {
                        users.map(user => <tr key={user_id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.createdAt}</td>
                            <td>
                                <button onClick={() => handleDelete(user._id)}>X</button>
                            </td>
                            <td>Blue</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </div>
);
};

export default Users;