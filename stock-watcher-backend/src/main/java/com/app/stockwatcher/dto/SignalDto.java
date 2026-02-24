package com.app.stockwatcher.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

public record SignalDto(
        Long signalId,              // alert_id
        OffsetDateTime signalTime,  // created_at
        LocalDate date,             // trade_date
        String symbol,
        String type,                // BUY/SELL
        BigDecimal close,           // trigger_price를 close로 내려줌(프론트 그리드 필드명)
        BigDecimal triggerPrice,    // trigger_price
        String note                 // message
) {}
