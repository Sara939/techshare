import React, { createContext } from "react";
import context from "react-bootstrap/esm/AccordionContext";
import { useReducer } from "react";

//סטייט התחלתי

const InitialStateUser = {

    Username: "sara",
    Password: "sara123",
    DateOfBirth: "16/08/1992",
    Email: "saralikaunt@gmail.com",
    Photo: "https://st3.depositphotos.com/1594308/18788/i/1600/depositphotos_187884912-stock-photo-happy-young-teacher-small-group.jpg"
}

export const UserContext= createContext(InitialStateUser);

export const UserProvidor= ({children})=>{

}