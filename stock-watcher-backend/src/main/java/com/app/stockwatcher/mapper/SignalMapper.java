package com.app.stockwatcher.mapper;

import com.app.stockwatcher.dto.SignalDto;
import com.app.stockwatcher.dto.SignalSearchParam;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SignalMapper {
    List<SignalDto> selectSignals(SignalSearchParam param);
}