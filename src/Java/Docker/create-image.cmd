docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sektor-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t sektor-java/app ../../..
