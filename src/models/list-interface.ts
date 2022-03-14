export interface ListInterface<TYPE> {
  total_results: number;
  results: TYPE[];
}

export const listAdapter = <TYPE>(
  input: any,
  listItemAdapter: (input: any) => TYPE
): ListInterface<TYPE> | null => {
  if (input) {
    const output: ListInterface<TYPE> = {
      total_results: input.total_results || 0,
      results:
        input.results instanceof Array
          ? input.results.map(listItemAdapter)
          : [],
    };
    return output;
  }
  return null;
};
