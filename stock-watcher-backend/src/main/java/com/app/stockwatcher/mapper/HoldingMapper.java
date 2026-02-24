package com.app.stockwatcher.mapper;

import com.app.stockwatcher.dto.HoldingDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface HoldingMapper {
    List<HoldingDto> selectOpenHoldings(Long userId);
}