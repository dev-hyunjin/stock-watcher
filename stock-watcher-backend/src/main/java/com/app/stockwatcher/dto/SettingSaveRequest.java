package com.app.stockwatcher.dto;

public record SettingSaveRequest(
        Boolean inAppEnabled,
        Boolean emailEnabled,
        String emailAddress,
        Boolean telegramEnabled,
        String telegramChatId,
        Boolean slackEnabled,
        String slackWebhookUrl
) {}