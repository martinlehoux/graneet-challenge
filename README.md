## Getting started

1. Start services `docker-compose up`
2. Download dataset `curl -L https://unpkg.com/codes-postaux/codes-postaux.json > codes-postaux.json`
3. Index dataset `curl -X POST -H "Content-Type: application/json" -d @codes-postaux.json localhost/api/city/index`
4. Access the webapp at http://localhost

## Testing

Testing is available for backend only after having indexed data: `cd backend && npm test`. Testing is exclusively on integration with elastic, because this is were lies the most complex part.

Frontend is too simple to add use cases tests.

## Deployment

Deploying would require having an Elasticsearch deployment, I don't know any solution to host this easily and freely. But is could be deployed on a basic instance using the docker-compose.yml file.