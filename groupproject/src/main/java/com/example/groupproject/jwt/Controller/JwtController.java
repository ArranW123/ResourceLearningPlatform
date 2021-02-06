package com.example.groupproject.jwt.Controller;



import com.example.groupproject.config.MyUserDetails;
import com.example.groupproject.jwt.Service.JwtUserDetailsService;
import com.example.groupproject.jwt.dto.JwtRequestDTO;
import com.example.groupproject.jwt.dto.JwtResponseDTO;
import com.example.groupproject.jwt.dto.UserResponseDTO;
import com.example.groupproject.jwt.jwtconfig.JwtTokenUtil;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;



@RestController
public class JwtController  {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private JwtTokenUtil jwtTokenUtil;


    @Autowired
    private JwtUserDetailsService userDetailsService;

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequestDTO authenticationRequest) throws Exception {

        authenticate(authenticationRequest.getEmail(), authenticationRequest.getPassword());

        final MyUserDetails userDetails = (MyUserDetails) userDetailsService
                .loadUserByUsername(authenticationRequest.getEmail());

        final String token = jwtTokenUtil.generateToken(userDetails);

        UserResponseDTO userResponseDTO = new UserResponseDTO();
        userResponseDTO.setStudent(userDetails.getUser());
        return ResponseEntity.ok(new JwtResponseDTO(token,userResponseDTO));
    }




    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        }
        catch (SignatureException | MalformedJwtException | UnsupportedJwtException | IllegalArgumentException ex) {
            throw new BadCredentialsException("INVALID_CREDENTIALS", ex);
        }
        catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }
}
