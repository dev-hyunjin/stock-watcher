package com.app.stockwatcher.dto;

import java.math.BigDecimal;
import java.time.OffsetDateTime;

public record SettingDto(
        Long userId,
        // 전략 기본값(현재 스키마에 user 전략설정 테이블이 없어 기본값으로 제공)
        BigDecimal buyThreshold,      // 1.1000
        BigDecimal trailRatio,        // 0.9000

        // 알림 채널(=tbl_user_notification_setting)
        Boolean inAppEnabled,
        Boolean emailEnabled,
        String emailAddress,
        Boolean telegramEnabled,
        String telegramChatId,
        Boolean slackEnabled,
        String slackWebhookUrl,

        OffsetDateTime updatedAt
) {}