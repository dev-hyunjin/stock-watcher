package com.app.stockwatcher.api;

import com.app.stockwatcher.dto.SettingDto;
import com.app.stockwatcher.dto.SettingSaveRequest;
import com.app.stockwatcher.service.SettingService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/settings")
public class SettingController {

    private final SettingService settingService;

    public SettingController(SettingService settingService) {
        this.settingService = settingService;
    }

    @GetMapping
    public SettingDto getSettings(
            @RequestHeader(value = "X-USER-ID", required = false) Long userIdHeader
    ) {
        long userId = (userIdHeader == null ? 1L : userIdHeader);
        return settingService.getSettings(userId);
    }

    @PostMapping
    public SettingDto saveSettings(
            @RequestHeader(value = "X-USER-ID", required = false) Long userIdHeader,
            @RequestBody SettingSaveRequest req
    ) {
        long userId = (userIdHeader == null ? 1L : userIdHeader);
        return settingService.saveSettings(userId, req);
    }
}