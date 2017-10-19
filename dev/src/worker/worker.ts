//importScripts("https://rawcdn.githack.com/Microsoft/TypeScript/8212c962cdc8286ed9067c8446898bb0dc618c92/lib/typescriptServices.js");
importScripts("./lib/typescriptServices.js");

self.addEventListener(
    "message",
    (e: any) => {
        switch (e.data.type) {
            case "ts":
                compileTS(e); 
                break;

            case "js":
                runJS(e);
                break;
            default:
                postMessage("SOMETHING WENT WRONG");
                close();
        }
    }
);

const compileTS = (e: any) => {
    postMessage({
        "type": e.data.type,
        "data": ts.transpile(e.data.data)
    });

    close();
};

const runJS = (e: any) => {
    eval(e.data.data);

    postMessage({
        "type": e.data.type,
        "data": e.data.data
    });
    
    close();
}