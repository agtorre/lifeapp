#Running
```
docker-compose build
docker-compose up
browse to localhost:3000/
```



#Formatting Code
```
docker-compose build
docker-compose run lifeapp jsfmt file_name.js -w
```


#query example
```
curl -X POST -H "Content-Type: application/json" --data @data.json "http://localhost:3000/graphql"
```

for query @data.json contains:
```
{"query": "query CardQuery{card(name:\"some_name\") {name points_type points}}"}
```

for upsert @data.json contains:
```
{"query": "mutation CardMutationType{card(name:\"some_name\", points_type:\"some_type\", points:14) {name points_type points}}"}
```
