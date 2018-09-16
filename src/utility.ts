// Utility function to display Observable value
export function addValue(value: any, err: boolean = false) {
  const node = document.createElement('li');
  const textNode = document.createTextNode(value);
  node.appendChild(textNode);
  let output;
  if (err) {
    output = document.getElementById('error');
  } else {
    output = document.getElementById('output');
  }

  if (output) {
    output.appendChild(node);
  }
}