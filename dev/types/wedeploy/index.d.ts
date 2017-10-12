declare module 'wedeploy' {
    type orderDirection = "asc" | "desc";
    type SQLOperator = "=" | "!=" | ">" | ">=" | "<" | "<=" | "~" | "any" | "none";
    type aggregateOperator = "min" | "max" | "sum" | "avg";
    type eventName = "changes" | "fail";

    interface WD {
        data(
            this: WD,
            url: string
        ): WD;
        
        create(
            this: WD,
            endPoint: string,
            data: {} | {}[]
        ): WD;

        where(
            this: WD, 
            fieldName: string,
            operator: SQLOperator,
            value: any
        ): WD;

        match(
            this: WD,
            fieldName: WD,
            value: any
        ): WD;

        similar(
            this: WD,
            fieldName: string,
            value: any
        ): WD;

        hightlight(
            this: WD,
            fieldName: string
        ): WD;

        search(
            this: WD,
            endPoint: string
        ): WD;

        lt(
            this: WD,
            fieldName: WD,
            value: any
        ): WD;

        aggregate(
            this: WD,
            name: WD,
            fieldName: WD,
            value: any
        ): WD;
        
        or(
            this: WD, 
            fieldName: string,
            operator: SQLOperator,
            value: any
        ): WD;
        
        orderBy(
            this: WD,
            fieldName: string,
            direction: orderDirection
        ): WD;

        limit(
            this: WD,
            limit: number
        ): WD;

        offset(
            this: WD,
            offset: number
        ) : WD;
        
        get(
            this: WD,
            endPoint: string
        ): WD;
        
        watch(
            this: WD,
            endPoint: string
        ): WD;

        on(
            this: WD,
            eventName: eventName,
            callback: (
                response: {}
            ) => void
        ): WD;

        update(
            this: WD,
            endPoint: string,
            value: {}
        ): WD;

        delete(
            this: WD,
            endPoint: string
        ): WD;

        then(
            this: WD,
            callback: (
                reponse: {}
            ) => void
        ): WD;
    }

    const WeDeploy: WD;
    export default WeDeploy;
}