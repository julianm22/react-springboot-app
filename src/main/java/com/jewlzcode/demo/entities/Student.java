package com.jewlzcode.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import java.util.UUID;

@Entity
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long studentId;
    private String firstName;
    private String lastName;
    private String email;
    private String gender;

    public Student() {};

    public Student(long studentId, String firstName, String lastName, String email, String gender) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public long getStudentId() { return studentId; }

    public String getFirstName() { return firstName; }

    public String getLastName() { return lastName; }

    public String getEmail() { return email; }

    public String getGender() { return gender; }

//    enum Gender {
//        MALE, FEMALE
//    }
}
