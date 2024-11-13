// console.log("I am in index js");
// how to fetch data into your script
// promise method

fetch('./groceryData.json').then((response) => {
    if (!response.ok) {
        throw new Error("network error: ");
    }

    return response.json();
}).then((data) => {
    console.log(data);
});