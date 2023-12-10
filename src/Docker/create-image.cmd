docker build --no-cache -f SQL\Dockerfile.PostgreSql -t sektor/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t sektor/app ../..
