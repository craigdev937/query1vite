import React from "react";

export const Heroes = () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    const URL = "http://localhost:5000/superheroes";
    React.useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(URL);
            if (!res.ok) throw new Error(res.statusText);
            const data = await res.json();
            setData(data);
            return [...data];
        };
        fetchData();        
        setIsLoading(false);
    }, []);

    if (isLoading) return <h1>Loading...</h1>;

    return (
        <React.Fragment>
            <h1>Heroes</h1>
            {data.map((hero) => (
                <main key={hero.id}>
                    <h3>{hero.name}</h3>
                    <p>{hero.alterEgo}</p>
                </main>
            ))}
        </React.Fragment>
    );
};


