export const selectContacts = state => state.contacts.items;

export const selectFilter = state => state.filter;

export const selectError = state => state.contacts.error;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectVisibleContacts = state => {
  const items = selectContacts(state);
  const filter = selectFilter(state);
  if (items.length === 0) {
    return;
  }
  const normalizedFilter = filter.toLowerCase().trim();
  return items.filter(item =>
    item.name.toLowerCase().includes(normalizedFilter)
  );
}