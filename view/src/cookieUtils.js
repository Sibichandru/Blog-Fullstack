export function getCookie(name) {
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split('=');
    if (cookieName === name) {
      // console.log(decodeURIComponent(cookieValue));
      return decodeURIComponent(cookieValue);
    }
  }
  return null;
}
