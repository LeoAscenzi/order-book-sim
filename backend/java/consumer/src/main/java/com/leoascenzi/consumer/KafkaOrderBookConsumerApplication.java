package com.leoascenzi.consumer;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class KafkaOrderBookConsumerApplication {

	public static void main(String[] args) {
		SpringApplication.run(KafkaOrderBookConsumerApplication.class, args);
	}

}
