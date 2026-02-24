package com.app.stockwatcher.service.impl;

import com.app.stockwatcher.dto.HoldingDto;
import com.app.stockwatcher.mapper.HoldingMapper;
import com.app.stockwatcher.service.HoldingService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HoldingServiceImpl implements HoldingService {

    private final HoldingMapper holdingMapper;

    public HoldingServiceImpl(HoldingMapper holdingMapper) {
        this.holdingMapper = holdingMapper;
    }

    @Override
    public List<HoldingDto> getOpenHoldings(Long userId) {
        return holdingMapper.selectOpenHoldings(userId);
    }
}