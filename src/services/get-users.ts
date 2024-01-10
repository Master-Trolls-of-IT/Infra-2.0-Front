import axios from 'axios';
import {Dispatch, SetStateAction} from "react";
import {user} from "../user/user";

const useServicesData = (setUsers: Dispatch<SetStateAction<user[]>>): any => {
    const baseURL = 'http://ec2-52-47-182-154.eu-west-3.compute.amazonaws.com/users'
    const baseHeaders = {
        'Content-Type': 'application/json'
    };
    const baseConfig = { baseURL: baseURL, headers: baseHeaders, withCredentials: false };

    const getUsers = () => {
        axios.get(baseURL, baseConfig)
            .then(res => {
                const users = res.data;
                setUsers(users);
            })
    }

    const createUser = (newUser: any) => {
        newUser.age = Number(newUser.age);

        axios.post(baseURL, newUser, baseConfig)
            .then(res => {
                const data = res.data;
                setUsers(data.users);
            })
    }

    const updateUser = (newUser: any) => {
        newUser.age = Number(newUser.age);

        axios.post(baseURL + '/' + newUser.id, newUser, baseConfig)
            .then(res => {
                const data = res.data;
                setUsers(data.users);
            })
    }

    const deleteUser = (userId: any) => {
        axios.delete(baseURL + '/' + userId, baseConfig)
            .then(res => {
                const data = res.data;
                setUsers(data.users);
            })
    }

    return { deleteUser, createUser, getUsers, updateUser };
}

export default useServicesData;
