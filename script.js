var url = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vRLSlGPq27upTf5qRlmeGlwVnECJWJP0U7dc2tWBHTrFOv98DHH6ZpOQ-3D5hzezkwWHvMw1iMaw86W/pub?output=csv';
var httpRequest;

function makeRequest() {
  httpRequest = new XMLHttpRequest();

  if (!httpRequest) {
    alert('Cannot create XMLHttp instance');
    return false;
  }
  httpRequest.onreadystatechange = updateContent;
  httpRequest.open('GET', 'test.html');
  httpRequest.send();
}

function updateContent() {
  if (httpRequest.readyState = XMLHttpRequest.DONE) {
    if (httpRequest.status == 200) {
      console.log(httpRequest.responseText);
    } else {
      alert('There was a problem with the request.');
    }
  }
}

window.addEventListener('load', function () {
  makeRequest();
});