"use client";

import axios from "axios";

export default function Button({ uri }: Readonly<{ uri: string }>) {
    const onClick = async () => {
        try {
            const response = await axios.get(uri);
            const { data } = response;
            const { message } = data;
            console.log("Fetched message", message);
        } catch (error) {
            console.error(error);
        }
    };

    return <button onClick={onClick}>Fetch Message</button>;
}
