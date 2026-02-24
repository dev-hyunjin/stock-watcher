package com.app.stockwatcher.service.impl;

import com.app.stockwatcher.dto.SignalDto;
import com.app.stockwatcher.dto.SignalSearchParam;
import com.app.stockwatcher.mapper.SignalMapper;
import com.app.stockwatcher.service.SignalService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SignalServiceImpl implements SignalService {

    private final SignalMapper signalMapper;

    public SignalServiceImpl(SignalMapper signalMapper) {
        this.signalMapper = signalMapper;
    }

    @Override
    public List<SignalDto> searchSignals(SignalSearchParam param) {
        return signalMapper.selectSignals(param);
    }
}