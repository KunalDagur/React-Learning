import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userId } = useParams();
    return (
        <>
            <h1 className="text-3xl font-bold bg-cyan-500 text-black p-4">User : {userId}</h1>
        </>
    );
}

export default User;