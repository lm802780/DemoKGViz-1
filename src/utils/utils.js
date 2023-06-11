export const isParameterTypeDataAlreadyFetch = (parameters, parameter) => {
    console.log("isParameterTypeDataAlreadyFetch parameters", parameters);
    console.log("isParameterTypeDataAlreadyFetch parameter", parameter);
    console.log("isParameterTypeDataAlreadyFetch name", parameter.request.name);
    const foundTypeData = parameters.find(p => p.request.name === parameter.request.name);
    return !!foundTypeData
}

export function groupRequestsByParam(requests) {
    return [...new Set(requests.map(item => item.request))]
}

export function reloadChart(context) {
    // Reload chart data

    // if comparison is active, then use getComparisonDate, else use getStartDate...

    for (let fonction of groupRequestsByParam(context.getters.getParameters)) {
        context.dispatch("setWeather", {
            query: fonction(
                context.getters.getSelectedStationsJoin,
                context.getters.getDate[0],
                context.getters.getDate[1]),
            queryMethod: fonction.name
        });
    }
}
