package Dubbo.service;

/**
 * Created by yangyang on 2018/7/31.
 */
public class GreetingServiceImpl implements GreetingService {
    @Override
    public String sayHello(String name) {
        return "Hello " + name;
    }
}
