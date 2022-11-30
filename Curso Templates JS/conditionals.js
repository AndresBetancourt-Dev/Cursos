// As known template literals uses special characters
/**
 * but how do we know if we actually refer to for example a ` or $ character within this strings
 * We simply use backslash and the intended character
 */

`\`` === "`"; // true
`\${1}` === "${1}"; // true
