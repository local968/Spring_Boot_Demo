package com.liancheng.link.schedule;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
class ScheduleTest {

//    @Scheduled(cron = "*/6 * * * * ?")
    public void cronTest() {
        System.out.println("schedule cron test , current = " + new Date());
    }

//    @Scheduled(fixedRate = 8000)
    public void fixedRate() {
        System.out.println("schedule fixedRate test , current = " + new Date());
    }
}
