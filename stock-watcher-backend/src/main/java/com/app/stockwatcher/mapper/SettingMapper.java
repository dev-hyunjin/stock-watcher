package com.app.stockwatcher.mapper;

import com.app.stockwatcher.dto.SettingSaveRequest;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.time.OffsetDateTime;

@Mapper
public interface SettingMapper {

    // 내부 row 매핑용 record (DTO 노출 안함)
    record NotificationSettingRow(
            Boolean inAppEnabled,
            Boolean emailEnabled,
            String emailAddress,
            Boolean telegramEnabled,
            String telegramChatId,
            Boolean slackEnabled,
            String slackWebhookUrl,
            OffsetDateTime updatedAt
    ) {}

    void insertNotificationSettingIfNotExists(@Param("userId") Long userId);

    NotificationSettingRow selectNotificationSetting(@Param("userId") Long userId);

    int updateNotificationSetting(@Param("userId") Long userId,
                                  @Param("req") SettingSaveRequest req);
}