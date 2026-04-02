export default async function PromiseFetch() {
    const catFacts = await fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
            // console.log("Cat facts data:", data);
            return data;
        }).catch((error) => {
            console.error("Error fetching cat facts:", error);
            return [];
        });
    console.log("Cat facts:", catFacts);
    return (
        <>
        </>
    );
}