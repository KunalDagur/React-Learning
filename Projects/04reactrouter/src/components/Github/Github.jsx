import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {

    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data)
    //         })
    // }, [])
    return (
        <>
            <div className="bg-green-600 text-3xl text-center text-white p-4 m-4">Github Followers : {data.followers}</div>
            <div className="bg-green-600 text-3xl text-center text-white p-4 m-4">Github Username : {data.login}</div>

        </>
    )

}

export const githubInfoLoader = async () => {
    const data = await fetch('https://api.github.com/users/hiteshchoudhary')
    return data.json()
}

export default Github