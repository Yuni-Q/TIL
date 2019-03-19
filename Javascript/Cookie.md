
# Cookie

```javascript
getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }

  // version 2
  getCookie(value: string): string {
    if (canUseDOM()) {
      const decodedCookie = decodeURIComponent(document.cookie);
      const cookieList = decodedCookie.split(';') as string[];
      const name = value + '=';
      const cookie = cookieList.find((e) => e.trim().indexOf(name) === 0);
      return cookie
          ? cookie.substring(name.length + 1)
          : '';
    }
  }

// set Cookie
document.cookie = 'home=1; expires=' + new Date(Date.now()+(60*60*24*1000)).toUTCString()+';';
```