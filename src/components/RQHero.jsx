import React from "react";
import { useQuery } from "react-query";
import { FetchAll } from "../global/FetchAPI";

export const RQHero = () => {
    const qHero = useQuery(["heros"], FetchAll);
    if (qHero.isLoading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>RQHero</h1>
            {qHero.data?.map((hero) => (
                <main key={hero.id}>
                    <h3>{hero.name}</h3>
                    <p>{hero.alterEgo}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


