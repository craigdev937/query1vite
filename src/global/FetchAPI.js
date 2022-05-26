const URL = "http://localhost:5000/superheroes";

export const FetchAll = async () => {
    const res = await fetch(URL);
    if (!res.ok) throw new Error(res.statusText);
    await new Promise((res) => setTimeout(res, 2000));
    const data = await res.json();
    return [...data];
};





