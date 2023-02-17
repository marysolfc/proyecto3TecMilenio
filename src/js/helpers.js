import { TIMEOUT_SEC } from "./config.js";

const timeout = function (s) {
        return new Promise(function (_, reject) {
          setTimeout(function () {
            reject(new Error(`Request took too long! Timeout after ${s} second`));
          }, s * 1000);
        });
      };

export async function getJSON(URL){
        const fetchPro = await fetch(URL);
        const resp = await Promise.race([fetchPro,timeout(TIMEOUT_SEC)]);
        //const resp = await fetch(URL);
        const data = await resp.json();
        return data;
}