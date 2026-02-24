package com.app.stockwatcher.service.impl;

import com.app.stockwatcher.dto.SettingDto;
import com.app.stockwatcher.dto.SettingSaveRequest;
import com.app.stockwatcher.mapper.SettingMapper;
import com.app.stockwatcher.service.SettingService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.math.BigDecimal;

@Service
public class SettingServiceImpl implements SettingService {

    private static final BigDecimal DEFAULT_BUY_THRESHOLD = new BigDecimal("1.1000"); // +10%
    private static final BigDecimal DEFAULT_TRAIL_RATIO   = new BigDecimal("0.9000"); // 0.9

    private final SettingMapper settingMapper;

    public SettingServiceImpl(SettingMapper settingMapper) {
        this.settingMapper = settingMapper;
    }

    @Override
    @Transactional(readOnly = true)
    public SettingDto getSettings(Long userId) {
        // 없으면 기본 row 생성
        settingMapper.insertNotificationSettingIfNotExists(userId);

        var row = settingMapper.selectNotificationSetting(userId);

        return new SettingDto(
                userId,
                DEFAULT_BUY_THRESHOLD,
                DEFAULT_TRAIL_RATIO,
                row.inAppEnabled(),
                row.emailEnabled(),
                row.emailAddress(),
                row.telegramEnabled(),
                row.telegramChatId(),
                row.slackEnabled(),
                row.slackWebhookUrl(),
                row.updatedAt()
        );
    }

    @Override
    @Transactional
    public SettingDto saveSettings(Long userId, SettingSaveRequest req) {
        settingMapper.insertNotificationSettingIfNotExists(userId);
        settingMapper.updateNotificationSetting(userId, req);
        return getSettings(userId);
    }
}