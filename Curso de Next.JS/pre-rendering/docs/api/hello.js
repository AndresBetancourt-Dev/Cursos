// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

/**
 * Request, Response objects from Node.js
 * response.status indicates the status that the response must return
 * there are several http statuses 
 * 200 - Ok
 * 201 - Saved
 * 401 - Error
 * Authentication Required - 403
 * Not Found - 404
 * 500 - Server Error
 * 
 * .json -> indicates that the response is a Json an receives as a parameter the JSON object
 * JSON stands for Javascript Object Notation
 */
export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
