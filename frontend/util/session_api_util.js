export const ajaxSignUp = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const ajaxLogin = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const ajaxLogout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);
