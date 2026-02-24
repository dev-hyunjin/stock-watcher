package com.app.stockwatcher.service;

import com.app.stockwatcher.dto.HoldingDto;

import java.util.List;

public interface HoldingService {
    List<HoldingDto> getOpenHoldings(Long userId);
}