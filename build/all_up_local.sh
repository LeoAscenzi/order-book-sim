#!/usr/bin/env bash
docker compose -f "../deployments/docker-compose.local.yml" build datagenerator
docker compose -f "../deployments/docker-compose.local.yml" build consumer
docker compose -f "../deployments/docker-compose.local.yml" build broker
echo "Starting Kafka broker container and then waiting 3 seconds"
docker compose -f "../deployments/docker-compose.local.yml" up -d
sleep 3
echo "Kafka started, creating trade-data topic"
docker exec -it broker /opt/kafka/bin/kafka-topics.sh --create --topic trade-bids --bootstrap-server broker:29092
docker exec -it broker /opt/kafka/bin/kafka-topics.sh --create --topic trade-asks --bootstrap-server broker:29092
echo "Created trade-data topic, beginning producer loop in container"

