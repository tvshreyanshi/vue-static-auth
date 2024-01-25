export default function authGaurd(to, from, next) {
  let isAuthenticated = false;
  if (localStorage.getItem('authToken')) {
    isAuthenticated = true;
  } else {
    isAuthenticated = false;
  }
  if (isAuthenticated) {
    next(); // allow to enter route
  } else {
    next('/login'); // go to '/login';
  }
}
