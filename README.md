# Bible API

hash: 17ab676fe7ecfe0919a38bc574e304f9
client: ff913c55498d2380-01

## App Structure:

* config
* controllers
* entities
* middlewares
* schemas
* services
* useCases

## Resources

```bash
## Get all bibles
/api/v1/bibles

## Get bibile by ID
/api/v1/bibles/:bibleId

## Get all books of a bible
/api/v1/bibles/:bibleId/books

## Get a book by ID
/api/v1/bibles/:bibleId/:bookId

## Get all chapters of a book
/api/v1/bibles/:bibleId/:bookId/chapters

## Get a chapter by ID
/api/v1/bibles/:bibleId/:bookId/:chapterId
```
## Read more at
https://codeburst.io/node-js-typescript-on-heroku-a3ac5a62cf66
https://hackernoon.com/how-to-write-nice-typed-and-expressive-node-express-functions-107ae7edd41
https://medium.com/@igorandreev/how-to-start-with-backend-typescript-and-use-its-full-potential-5114e52012b
https://medium.com/becoming-a-computer-engineer/undergraduates-create-a-complete-rest-api-with-nodejs-express-and-swagger-7d3fb0734a5a
https://www.toptal.com/nodejs/gatsby-js-node-js-static-site-generator-pt-1
