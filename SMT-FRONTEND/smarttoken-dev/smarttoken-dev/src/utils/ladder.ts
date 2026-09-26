export function passUrl(url) {
  if(url.includes('p-id=')) {
    return url.split('p-id=')[1];
  } else {
    return null;
  }
}
