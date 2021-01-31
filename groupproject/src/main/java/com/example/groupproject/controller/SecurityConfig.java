package com.example.groupproject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;
@Configuration
@EnableWebSecurity

public class SecurityConfig extends WebSecurityConfigurerAdapter {


    @Autowired
    DataSource dataSource;

    @Override

    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication()
                .dataSource(dataSource)

                .usersByUsernameQuery("Select  username,password, enabled "
                                        +"from student "
                                        +"where username = ?")
                .authoritiesByUsernameQuery("select username,authority  from student where username = ?");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/admin").hasAnyRole("ADMIN")
                .antMatchers("/user").hasAnyRole("USER","ADMIN")
                .antMatchers("/").permitAll()


                .and().formLogin()
                .defaultSuccessUrl("/user",true);

        http .logout()
                .logoutSuccessUrl("/");






    }


    private void defaultSuccessUrl(String s, boolean b) {
    }

    @Bean
    public PasswordEncoder getPasswordEncoder()
    {
        return  NoOpPasswordEncoder.getInstance();
    }
}
