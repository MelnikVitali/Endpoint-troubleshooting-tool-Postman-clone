export const keyValuePairsToObjects = (container) => {
    let params = {};

    container.forEach((data) => {
        if (data['key']) {
            if (data['value']) {
                params[data['key']] = data['value'];
            }
        }
    });

    return params;
};
