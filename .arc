@app
begin-app

@static
folder dist

@http
get /api
get /test

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
