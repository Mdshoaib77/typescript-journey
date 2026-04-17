function getChai(kind: string | number){
    if(typeof kind === 'string'){
        return `Making ${kind} chai...`
    }
    return `Chai order: ${kind.}`
}

function serveChai(msg?: string) {
    if (msg) {
        return `serving ${msg}`;
    }
    return `Serving default masalla chai`;
}

function orderChai(size: "small" | "medium" | "large" |
    number){
        if(size === "small"){
            return `small cutting chai...`
        }
        if(size === 'medium' || size === "large"){
            return `make extra cgai`
        }
        return `chai order #${size}`
    }

    class kulhadchai{
        serve(){
            return `serving kulhad chai`
        }
    }
    class cutting {
        serve(){
            return `serving cuting chai`
        }
    }

    function serve(chai: kulhadchai | cutting) {
        if (chai instanceof kulhadchai) {
            return chai.serve();
        }
    }

    type ChaiOrder = {
        type: string
        sugar: number
    }

    