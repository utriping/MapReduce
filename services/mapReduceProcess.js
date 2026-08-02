import reducer from "./reducer.js";
import fs from "fs";

const mapReduceProcess = async () => {
    const result = await reducer();
    console.log(result);
    fs.writeFileSync("result.json", JSON.stringify(result, null, 2), "utf-8");
};

export default mapReduceProcess;