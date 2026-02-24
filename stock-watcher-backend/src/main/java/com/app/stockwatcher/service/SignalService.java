package com.app.stockwatcher.service;

import com.app.stockwatcher.dto.SignalDto;
import com.app.stockwatcher.dto.SignalSearchParam;

import java.util.List;

public interface SignalService {
    List<SignalDto> searchSignals(SignalSearchParam param);
}