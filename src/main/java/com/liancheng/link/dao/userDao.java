package com.liancheng.link.dao;

import com.liancheng.link.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface userDao extends JpaRepository<User, Long> {

}
