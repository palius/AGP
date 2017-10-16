declare module 'wedeploy' {
    type orderDirection = "asc" | "desc";
    type SQLOperator = "=" | "!=" | ">" | ">=" | "<" | "<=" | "~" | "any" | "none";
    type aggregateOperator = "min" | "max" | "sum" | "avg";
    type eventName = "changes" | "fail";

    interface IWeDeploy {
        data(
            this: IWeDeploy,
            url: string
        ): IWeDeploy;
        
        create(
            this: IWeDeploy,
            endPoint: string,
            data: {} | {}[]
        ): IWeDeploy;

        where(
            this: IWeDeploy, 
            fieldName: string,
            operator: SQLOperator,
            value: any
        ): IWeDeploy;

        match(
            this: IWeDeploy,
            fieldName: IWeDeploy,
            value: any
        ): IWeDeploy;

        similar(
            this: IWeDeploy,
            fieldName: string,
            value: any
        ): IWeDeploy;

        hightlight(
            this: IWeDeploy,
            fieldName: string
        ): IWeDeploy;

        search(
            this: IWeDeploy,
            endPoint: string
        ): IWeDeploy;

        lt(
            this: IWeDeploy,
            fieldName: IWeDeploy,
            value: any
        ): IWeDeploy;

        aggregate(
            this: IWeDeploy,
            name: IWeDeploy,
            fieldName: IWeDeploy,
            value: any
        ): IWeDeploy;
        
        or(
            this: IWeDeploy, 
            fieldName: string,
            operator: SQLOperator,
            value: any
        ): IWeDeploy;
        
        orderBy(
            this: IWeDeploy,
            fieldName: string,
            direction: orderDirection
        ): IWeDeploy;

        limit(
            this: IWeDeploy,
            limit: number
        ): IWeDeploy;

        offset(
            this: IWeDeploy,
            offset: number
        ) : IWeDeploy;
        
        get(
            this: IWeDeploy,
            endPoint: string
        ): IWeDeploy;
        
        watch(
            this: IWeDeploy,
            endPoint: string
        ): IWeDeploy;

        on(
            this: IWeDeploy,
            eventName: eventName,
            callback: (
                response: {}
            ) => void
        ): IWeDeploy;

        update(
            this: IWeDeploy,
            endPoint: string,
            value: {}
        ): IWeDeploy;

        delete(
            this: IWeDeploy,
            endPoint: string
        ): IWeDeploy;

        then(
            this: IWeDeploy,
            callback: (
                reponse: {}
            ) => void
        ): IWeDeploy;
    }

    const WeDeploy: IWeDeploy;
    export default WeDeploy;
}