package com.app.stockwatcher.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.OffsetDateTime;

public record HoldingDto(
        Long positionId,
        String symbol,
        LocalDate buyDate,
        BigDecimal buyPrice,
        BigDecimal maxClose,     // max_close_since_buy (latest snapshot)
        BigDecimal trailRatio,   // 기본 0.9
        BigDecimal trailStop,    // trailing_stop_price (latest snapshot)
        String status,           // WAIT_BUY / HOLDING
        OffsetDateTime updatedAt
) {}
