package Dubbo.Provider;

import Dubbo.service.GreetingService;
import Dubbo.service.GreetingServiceImpl;
import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.RegistryConfig;
import com.alibaba.dubbo.config.ServiceConfig;

import java.io.IOException;

/**
 * Created by yangyang on 2018/7/31.
 */
public class Provider2 {
    public static void main(String[] args) throws IOException {
        ServiceConfig<GreetingService> serviceConfig = new ServiceConfig<GreetingService>();
        serviceConfig.setApplication(new ApplicationConfig("first_dubbo_demo"));
        serviceConfig.setRegistry(new RegistryConfig("muticast://224.5.6.7:1234"));
        serviceConfig.setInterface(GreetingService.class);
        serviceConfig.setRef(new GreetingServiceImpl());//此行及以上获取服务实际类ref并将服务转化为invoke
        serviceConfig.export();//用export方法转化为客户端需要的接口
        System.in.read();
    }
}
