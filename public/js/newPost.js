const newPostHandler = async function(event) {
    event.preventDefault();
  
    const title = $('#posttitle').val();
    const body = $r('#postbody').val();
  
    await fetch(`/api/post`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        body,
      }),
      headers: { 'Content-Type': 'application/json' },
    });
  
    document.location.replace('/dashboard');
  };
  
  document
    $('.commentbutton').on('click', newPostHandler);
  