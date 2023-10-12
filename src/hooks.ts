import {useState} from "react";

const useAppData = () => {
    const [users, setUsers] = useState([
        {
            id: 1,
            username: 'Utilisateur1',
            lastname: 'Nom1',
            firstname: 'Prénom1',
            age: '30',
            status: 'true',
        },
        {
            id: 2,
            username: 'Utilisateur2',
            lastname: 'Nom2',
            firstname: 'Prénom2',
            age: '25',
            status: 'false',
        },
    ]);

    const [editingUser, setEditingUser] = useState(-1);
    const [newUser, setNewUser] = useState({
        username: '',
        lastname: '',
        firstname: '',
        age: '',
        status: 'true',
    });

    const handleEditUser = (userId: number) => {
        setEditingUser(userId);
    };

    const handleEditUserChange = (userId: number, key: any, value: any) => {
        const updatedUsers = users.map((user) => {
            if (user.id === userId) {
                return { ...user, [key]: value };
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    const handleSaveUser = (userId: number) => {
        setEditingUser(-1);
    };

    const handleDeleteUser = (userId: number) => {
        const updatedUsers = users.filter((user) => user.id !== userId);
        setUsers(updatedUsers);
    };

    const handleCreateUser = () => {
        const newUserWithId = { ...newUser, id: users.length + 1, status: newUser.status === 'true' ? "true" : "false" };
        setUsers([...users, newUserWithId]);
        setNewUser({
            username: '',
            lastname: '',
            firstname: '',
            age: '',
            status: 'true',
        });
    };

    return { users, handleDeleteUser, handleCreateUser, handleSaveUser, handleEditUser, handleEditUserChange, editingUser, newUser, setNewUser }
}

export default useAppData;
