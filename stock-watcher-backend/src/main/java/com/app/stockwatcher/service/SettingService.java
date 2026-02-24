package com.app.stockwatcher.service;

import com.app.stockwatcher.dto.SettingDto;
import com.app.stockwatcher.dto.SettingSaveRequest;

public interface SettingService {
    SettingDto getSettings(Long userId);
    SettingDto saveSettings(Long userId, SettingSaveRequest req);
}