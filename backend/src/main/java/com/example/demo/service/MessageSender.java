package com.example.demo.service;

import org.springframework.amqp.rabbit.core.RabbitTemplate;
import org.springframework.stereotype.Service;

@Service
public class MessageSender {
    private final RabbitTemplate rabbitTemplate;

    // Constructor to inject RabbitTemplate
    public MessageSender(RabbitTemplate rabbitTemplate) {
        this.rabbitTemplate = rabbitTemplate;
    }

    // Send message to RabbitMQ
    public void sendMessage(String message) {
        rabbitTemplate.convertAndSend("messageQueue", message);
    }
}
