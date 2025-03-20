package com.example.demo.controller;

import com.example.demo.model.Message;
import com.example.demo.service.MessageService;
import com.example.demo.service.MessageSender;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/messages")
@CrossOrigin(origins = "http://localhost:3000") // Allowing requests from the frontend
public class MessageController {
    private final MessageService service;
    private final MessageSender sender;

    public MessageController(MessageService service, MessageSender sender) {
        this.service = service;
        this.sender = sender;
    }

    @GetMapping
    public List<Message> getAllMessages() {
        return service.getAllMessages();
    }

    @PostMapping
    public Message createMessage(@RequestBody Message message) {
        sender.sendMessage(message.getContent());
        return service.saveMessage(message);
    }
}
