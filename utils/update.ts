export const updateOneItem = (
  list: any[],
  setter: (any: any[]) => void,
  item: any
) => {
  const newItems = [...list];
  const index = newItems.findIndex((i: any) => i.id === item.id);
  newItems[index] = item;
  setter(newItems);
};
