import mapper from "./mapper.js";
//for all methods in the mapper returned object we have to sum the hits (size) and return an object with method as key and sum of hits as value 
const reducer = async () => {
    const result = {};
    const data = await mapper();
    for (const method in data) {
        result[method] = data[method].length;
    }
    return result;
};

export default reducer;