import parser from "../utils/parser.js";

const mapper = async () => {
    const data = await parser();
    const grouped = {};

    data.forEach(({ url, hit }) => {
        if (!grouped[url]) {
            grouped[url] = [];
        }
        grouped[url].push(hit);
    });

    return grouped;
}

export default mapper;