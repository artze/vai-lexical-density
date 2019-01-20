# Lexical Density

## API Documentation

#### Check Overall Lexical Density
* Send `POST` request to `/complexity`
* `POST` request body format:
```
{
  textInput: <insert text here>
}
```
* Response body:
```
{
  "data": {
    overall_ld: <value>
  }
}
```

#### Check Lexical Density Broken Down into Sentences
* Send `POST` request to `/complexity?mode=verbose`
* `POST` request body format:
```
{
  textInput: <insert text here>
}
```
* Response body: 
```
{
  "data": {
    sentence_ld: [<value>, <value>...]
    overall_ld: <value>
  }
}
```

#### Add Non-lexical Word to Database
* Send `POST` request to `/non-lexical-words`
* Basic auth required. User: `vaitrade` Pass: `vai123`
* `POST` request body format:
```
{
  wordInput: <insert word here>
}
```