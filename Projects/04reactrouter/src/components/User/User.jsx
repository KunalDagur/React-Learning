import React from "react";
import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

function User() {
    const { userId } = useParams();
    const data = useLoaderData();
    return (
        <>
            <h1 className="text-3xl font-bold bg-cyan-500 text-black p-4">User Id : {data.id}</h1>
        </>
    );
}

export default User;