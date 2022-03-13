export interface ListInterface<TYPE> {
  totalCount: number;
  items: TYPE[];
}

export const listAdapter = <TYPE>(
  input: any,
  listItemAdapter: (input: any) => TYPE
): ListInterface<TYPE> | null => {
  if (input) {
    const output: ListInterface<TYPE> = {
      totalCount: input.totalCount || 0,
      items: input.list instanceof Array ? input.list.map(listItemAdapter) : [],
    };
    return output;
  }
  return null;
};
