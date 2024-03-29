export const keyValuePairsToObjects = (container: any) => {
  const params: Record<string, string> = {};

  container.forEach((data: { key: string; value: string }) => {
    if (data['key']) {
      if (data['value']) {
        params[data['key']] = data['value'];
      }
    }
  });

  return params;
};
