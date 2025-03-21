package com.example.demo.model;

public class Message {
    private String id;
    private String content;

    // Constructors, Getters, Setters
    public Message(String content) {
        this.content = content;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
