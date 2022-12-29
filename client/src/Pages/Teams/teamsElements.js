import styled from "styled-components";
import {Card } from "reactstrap";


export const ContainerDiv = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  margin: 0;
  padding: 0;

  height: 100%;
  width: 100%;

  justify-content: center;

  z-index: 0;
  overflow-x: auto;
  /* background: #eae7e7; */
  background-color: white;
  flex: 1;
`;

export const TeamNameTitle = styled.h1`
    position: absolute;
    width: 20rem;
    top: 22%;
    margin: auto;
    left: 12rem;
    display: inline-block;
    color: black;
    font-size: 2.5rem;
    text-align: center;
    font-weight: bold;

    font-variant: petite-caps;
    font-family: Cambria,Cochin,Georgia,Times,"Times New Roman",serif;
`;

export const TeamContainer = styled.div`
    position: absolute;
    left: 0px;
    top: 4rem;
    border: solid;
    border-width: 1px;
    border-color: black;
    width: 500px;
    background-color: transparent;
    height: 256px;
`


export const PlayerTitle = styled.h1`
    position: absolute;
    width: 5rem;
    top: 21rem;
    margin: auto;
    color: black;
    font-size: 1.6rem;
    text-align: center;
    font-family: Cambria,Cochin,Georgia,Times,"Times New Roman",serif;
`;

export const PlayerContainer = styled.div`
    position: absolute;
    left: 0;
    top: 20rem;
    border: solid;
    border-width: 1px;
    border-color: black;
    width: 657px;
    background-color: transparent;
    height: 541px;
`;


export const StatsTitle = styled.h1`
  position:absolute;
  width: 5rem;

  left: 32rem;

  top: 5rem;
  margin:auto;
  
  display: inline-block;

  color: black;

  font-size: 1.6rem;
  text-align: center;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export const StatContainer = styled.div`
    position: absolute;
    left: 31.2rem;
    top: 4rem;
    border: solid;
    border-width: 1px;
    border-color: black;
    width: 657px;
    background-color: transparent;
    height: 256px;
`;

export const StyledHr = styled.hr`
   position:absolute;
   width:100%;

   top: 20rem;
  


  border-color: black;
  border-width: 2px;
  height: 10px;
  margin: 0 auto;


`;

export const TeamCard = styled(Card)`
  height: 75rem;  
  width: 80%;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  display: inline-block;
  
  top: 10%;
  left:10%;
  
  

  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  margin-left: 10px;

  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;

export const TeamImg = styled.img`
  position: absolute;
  left: 1rem;
  top: 5rem;
  z-index: 999;
  border: 7px #432C7A;
  width: 175px;
  height: 175px;

`;

export const ImgBox = styled.div`
    position: absolute;
    left: 0px;
    top: 4rem;
    border-width: 1px;
    border-color: black;
    width: 210px;
    height: 233px;
    background: black;
`;

export const standingsTitle = styled.h1`

  color: black;
  position: absolute;
  
  text-decoration-thickness: 1px;
  left:10px;
  text-align: center;
  font-weight: bold;
  margin-top:50px;

  font-size: 2.5rem;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;
export const StandingCard = styled(Card)`
  position: absolute;
  height: 10rem;  
  width: 15rem;
  border-width: 3px;
  border-color: rgba(255, 255, 255, 0.5);
  border-top-right-radius:5%;
  border-bottom-left-radius: 5%;
  border-top-left-radius: 5%;
  border-bottom-right-radius:5%;
  top: 38%;
  left: 43.5%;
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
  background: white;
  box-shadow: 0 4px 32px 0 rgba(50, 50, 100, 0.37);
`;