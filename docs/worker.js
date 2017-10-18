importScripts("https://rawgit.com/Microsoft/TypeScript/master/lib/typescriptServices.js");

self.addEventListener(
    "message",
    e => {
        switch (e.data.type) {
            case "ts":
                self.compile(e); 
                break;

            case "js":
                self.run(e);
                break;
            default:
                self.postMessage("SOMETHING WENT WRONG");
                self.close();
        }
    }
);

self.compile = e => {
    self.postMessage({
        "type": e.data.type,
        "data": ts.transpile(e.data.data)
    });

    self.close();
};

self.run = e => {
    eval(e.data.data);

    self.postMessage({
        "type": e.data.type,
        "data": e.data.data
    });
    
    self.close();
}