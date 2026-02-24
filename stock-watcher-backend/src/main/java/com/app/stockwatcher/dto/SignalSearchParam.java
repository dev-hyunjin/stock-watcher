package com.app.stockwatcher.dto;

import java.time.LocalDate;

public record SignalSearchParam(
        Long userId,
        String type,        // BUY / SELL
        String symbol,      // 005930
        LocalDate from,
        LocalDate to,
        Integer limit
) {}
