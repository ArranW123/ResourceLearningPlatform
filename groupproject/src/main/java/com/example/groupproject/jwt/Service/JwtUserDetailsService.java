package com.example.groupproject.jwt.Service;


import com.example.groupproject.config.MyUserDetails;
import com.example.groupproject.jwt.exception.BadCredentialException;
import com.example.groupproject.model.Student;
import com.example.groupproject.repository.StudentRepository;
import lombok.SneakyThrows;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


@Service
public class JwtUserDetailsService implements UserDetailsService {

    @Autowired
    private StudentRepository userRepository;

    @SneakyThrows
    @Override
    public UserDetails loadUserByUsername(String username)
            throws UsernameNotFoundException {
        Student user = userRepository.findByEmail(username);

        if (user == null) {
            throw new BadCredentialException("Could not find user");
        }

        return new MyUserDetails(user);
    }
}

