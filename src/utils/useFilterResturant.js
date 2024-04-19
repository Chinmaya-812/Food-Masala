export function filterData(search, res) {
  const fil = res.filter(function (i) {
    return i.info.name.toLowerCase().includes(search.toLowerCase());
  });
  return fil;
}
