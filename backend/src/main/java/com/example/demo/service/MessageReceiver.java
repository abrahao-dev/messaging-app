package com.example.demo.service;

import org.springframework.amqp.rabbit.annotation.RabbitListener;
import org.springframework.stereotype.Service;

@Service
public class MessageReceiver {

    @RabbitListener(queues = "messageQueue")
    public void receiveMessage(String message) {
        System.out.println("Received: " + message);
    }
}
