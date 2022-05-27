import React from "react";
import { useQuery } from "react-query";
import { FetchAll } from "../global/FetchAPI";

export const RQHero = () => {
    const { error, isError, isLoading, data } = 
        useQuery(["heros"], FetchAll);
    if (isLoading) return <h1>Loading...</h1>;
    if (isError) return <h1>{error.message}</h1>

    return (
        <React.Fragment>
            <h1>RQHero</h1>
            {data?.map((hero) => (
                <main key={hero.id}>
                    <h3>{hero.name}</h3>
                    <p>{hero.alterEgo}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


