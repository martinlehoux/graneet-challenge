1. Up data source + service
2. Import data
3. Access webapp

```
docker-compose up -d
cd backend && npm start
http POST http://localhost:3000/city/index @codes-postaux.json
http http://localhost:3000/city/search?q=montgeron
```