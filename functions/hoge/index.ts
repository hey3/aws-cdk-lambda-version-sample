import { Callback } from 'aws-lambda'

exports.handler = (_event: any, _context: any, callback: Callback) => {
  console.log('Hello World!!!!!!!')
  callback(null, "Success")
}
