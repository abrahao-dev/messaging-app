package com.example.demo.service;

import com.example.demo.model.Message;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MessageService {

    private final List<Message> messages = new ArrayList<>();

    public List<Message> getAllMessages() {
        return messages;
    }

    public Message saveMessage(Message message) {
        messages.add(message);
        return message;
    }
}
