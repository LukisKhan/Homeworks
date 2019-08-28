//POST to api/users
//POST to api/session
//Delete to api/session


export const postUser = (user) => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/users',
      data: {user},
    })
  )
};

export const postSession = (user) => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: {user},
  })
);

export const deleteSession = () => (
  $.ajax({
    method: 'DELETE',
    url: 'api/session',
  })
);