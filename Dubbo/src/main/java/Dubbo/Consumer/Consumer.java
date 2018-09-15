package Dubbo.Consumer;

import Dubbo.service.GreetingService;
import com.alibaba.dubbo.config.ApplicationConfig;
import com.alibaba.dubbo.config.ReferenceConfig;
import com.alibaba.dubbo.config.RegistryConfig;

/**
 * Created by yangyang on 2018/7/31.
 */
public class Consumer {

    public static void main(String[] args) {
        ReferenceConfig<GreetingService> referenceConfig = new ReferenceConfig<GreetingService>();
        referenceConfig.setApplication(new ApplicationConfig("first_dubbo_demo"));
        referenceConfig.setRegistry(new RegistryConfig("muticast://224.5.6.7:1234"));
        referenceConfig.setInterface(GreetingService.class);
        GreetingService greetingService = referenceConfig.get();
        System.out.print(greetingService.sayHello("world"));
    }
}
