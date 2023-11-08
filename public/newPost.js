


const newFormHandler = async function(event) {
  event.preventDefault();

  const title = document.querySelector('#textTitle').value;
  const body = document.querySelector('#textBody').value;

console.log(title, body)

  await fetch(`/api/posts`, {
    method: 'POST',
    //req.body
    body: JSON.stringify({
      title,
      body,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  document.location.replace('/blogs');
};


document
  .querySelector('#submitpost')
  .addEventListener('click', newFormHandler);