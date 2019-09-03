
function shuffle(a) {
  let j, x, i,idtemp, keytemp;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[i].key = i;
      a[i].id = i+1;
      a[j] = x;
      x.id = j+1;
      x.key = j;
  }
  return a;
}

export function shuffleNames(a) {
  let j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export default shuffle;

