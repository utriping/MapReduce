import fs from "fs/promises";

const parser = async () => {
    try {
        const data = await fs.readFile("./hits.txt", "utf8");

        const lines = data.split("\n").filter(line => line.trim());

        const parsedData = lines.map(line => {
            const [date, method, url] = line.split(" - ");

            return {
                url,
                hit: 1
            };
        });

        return parsedData;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export default parser;