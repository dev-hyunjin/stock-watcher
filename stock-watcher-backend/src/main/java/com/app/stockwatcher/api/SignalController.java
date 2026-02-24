package com.app.stockwatcher.api;

import com.app.stockwatcher.dto.ApiListResponse;
import com.app.stockwatcher.dto.SignalDto;
import com.app.stockwatcher.dto.SignalSearchParam;
import com.app.stockwatcher.service.SignalService;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api/signals")
public class SignalController {

    private final SignalService signalService;

    public SignalController(SignalService signalService) {
        this.signalService = signalService;
    }

    @GetMapping
    public ApiListResponse<SignalDto> getSignals(
            @RequestHeader(value = "X-USER-ID", required = false) Long userIdHeader,
            @RequestParam(required = false) String type,    // BUY/SELL
            @RequestParam(required = false) String symbol,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate from,
            @RequestParam(required = false) @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate to,
            @RequestParam(required = false, defaultValue = "200") Integer limit
    ) {
        long userId = (userIdHeader == null ? 1L : userIdHeader);
        int safeLimit = Math.min(Math.max(limit, 1), 1000);

        List<SignalDto> items = signalService.searchSignals(
                new SignalSearchParam(userId, type, symbol, from, to, safeLimit)
        );
        return ApiListResponse.of(items);
    }
}